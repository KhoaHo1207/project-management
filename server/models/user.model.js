import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profilePicture: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
    is2FAEnabled: {
      type: Boolean,
      default: false,
    },
    twoFAOtp: {
      type: String,
      select: false,
    },
    twoFAOtpExpires: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const Ueser = mongoose.model("User", userSchema);

export default User;
