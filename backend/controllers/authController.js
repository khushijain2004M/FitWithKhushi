const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const sendToken = require("../utils/sendToken");
const sendEmail = require("../utils/email");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

const clientUrl = () => (process.env.CLIENT_URL || "http://localhost:5173").split(",")[0].trim();
const digest = (value) => crypto.createHash("sha256").update(value).digest("hex");
const createToken = () => crypto.randomBytes(32).toString("hex");

const sendVerificationEmail = async (user) => {
  const token = createToken();
  user.emailVerificationToken = digest(token);
  user.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  await user.save({ validateBeforeSave: false });
  const url = `${clientUrl()}/verify-email?token=${token}`;
  await sendEmail({
    to: user.email,
    subject: "Verify your FitWithKhushi account",
    text: `Verify your account: ${url}`,
    html: `<p>Welcome to FitWithKhushi.</p><p><a href="${url}">Verify your email address</a></p><p>This link expires in 24 hours.</p>`,
  });
};

const registerUser = asyncHandler(async (req, res, next) => {
  const { fullName, email, password } = req.body;
  const normalizedEmail = email.toLowerCase().trim();
  if (await User.findOne({ email: normalizedEmail })) return next(new AppError("An account already exists for this email.", 409));

  const user = await User.create({ fullName: fullName.trim(), email: normalizedEmail, password: await bcrypt.hash(password, 12) });
  try {
    await sendVerificationEmail(user);
  } catch (error) {
    await User.findByIdAndDelete(user._id);
    return next(new AppError("Verification email service is unavailable. Please contact the app owner to finish setup.", error.statusCode || 502));
  }

  res.status(201).json({ success: true, message: "Account created. Check your email to verify it before logging in." });
});

const verifyEmail = asyncHandler(async (req, res, next) => {
  const token = digest(req.body.token || "");
  const user = await User.findOne({ emailVerificationToken: token, emailVerificationExpires: { $gt: new Date() } });
  if (!user) return next(new AppError("This verification link is invalid or has expired.", 400));
  user.emailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save();
  return sendToken(user, 200, res, "Email verified. You are now signed in.");
});

const resendVerification = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email.toLowerCase().trim() });
  if (!user) return res.status(200).json({ success: true, message: "If an account exists, a verification email has been sent." });
  if (user.emailVerified) return res.status(200).json({ success: true, message: "This email address is already verified." });
  try {
    await sendVerificationEmail(user);
  } catch (error) {
    return next(new AppError("Verification email service is unavailable. Please contact the app owner to finish setup.", error.statusCode || 502));
  }
  return res.status(200).json({ success: true, message: "Verification email sent. Please check your inbox." });
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase().trim() });
  if (!user || !(await bcrypt.compare(password, user.password))) return next(new AppError("Invalid email or password.", 401));
  if (!user.emailVerified) return next(new AppError("Verify your email before logging in. Use resend verification if needed.", 403));
  return sendToken(user, 200, res, "Login successful.");
});

const forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email.toLowerCase().trim() });
  const response = { success: true, message: "If a verified account exists for this email, a reset link has been sent." };
  if (!user || !user.emailVerified) return res.status(200).json(response);
  const token = createToken();
  user.passwordResetToken = digest(token);
  user.passwordResetExpires = new Date(Date.now() + 30 * 60 * 1000);
  await user.save({ validateBeforeSave: false });
  const url = `${clientUrl()}/reset-password?token=${token}`;
  try {
    await sendEmail({ to: user.email, subject: "Reset your FitWithKhushi password", text: `Reset your password: ${url}`, html: `<p><a href="${url}">Reset your password</a></p><p>This link expires in 30 minutes.</p>` });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError("Password reset email service is unavailable. Please contact the app owner to finish setup.", error.statusCode || 502));
  }
  return res.status(200).json(response);
});

const resetPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ passwordResetToken: digest(req.body.token || ""), passwordResetExpires: { $gt: new Date() } });
  if (!user) return next(new AppError("This password reset link is invalid or has expired.", 400));
  user.password = await bcrypt.hash(req.body.password, 12);
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  return sendToken(user, 200, res, "Password updated. You are now signed in.");
});

const getCurrentUser = asyncHandler(async (req, res) => res.status(200).json({ success: true, user: req.user }));

const logoutUser = asyncHandler(async (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  res.cookie("token", "", { expires: new Date(0), httpOnly: true, secure: isProduction, sameSite: isProduction ? "none" : "lax" });
  res.status(200).json({ success: true, message: "Logged out successfully." });
});

module.exports = { registerUser, verifyEmail, resendVerification, loginUser, forgotPassword, resetPassword, getCurrentUser, logoutUser };
