const nodemailer = require("nodemailer");

const requireEmailConfig = () => {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM"];
  const missing = required.filter((name) => !process.env[name]);
  if (missing.length) {
    const error = new Error(`Email delivery is not configured. Missing: ${missing.join(", ")}.`);
    error.statusCode = 503;
    throw error;
  }
};

const sendEmail = async ({ to, subject, text, html }) => {
  requireEmailConfig();
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({ from: process.env.MAIL_FROM, to, subject, text, html });
};

module.exports = sendEmail;
