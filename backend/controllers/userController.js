const bcrypt = require("bcryptjs");

const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");


// ===============================
// Get Profile
// ===============================
const getUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user,
    });

});


// ===============================
// Update Profile
// ===============================
const updateUserProfile = asyncHandler(async (req, res, next) => {

    const { fullName } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
        return next(new AppError("User not found.",404));
    }

    user.fullName = fullName || user.fullName;

    await user.save();

    res.status(200).json({
        success:true,
        message:"Profile updated successfully.",
        user,
    });

});


// ===============================
// Change Password
// ===============================
const changePassword = asyncHandler(async (req,res,next)=>{

    const {
        currentPassword,
        newPassword
    } = req.body;

    const user = await User.findById(req.user._id);

    const isMatch = await bcrypt.compare(
        currentPassword,
        user.password
    );

    if(!isMatch){
        return next(
            new AppError(
                "Current password is incorrect.",
                400
            )
        );
    }

    user.password = await bcrypt.hash(
        newPassword,
        10
    );

    await user.save();

    res.status(200).json({
        success:true,
        message:"Password changed successfully."
    });

});

module.exports = {
    getUserProfile,
    updateUserProfile,
    changePassword,
};