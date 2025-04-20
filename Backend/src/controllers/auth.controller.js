import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../util/cookie.util.js";
import cloudinary from "../lib/Cloudinary.js";

export const register = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    // Check if email or phoneNumber already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existingUser) {
      return res.status(400).json({
        message: "Email or Phone Number already exists",
        textColor: "red",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPasswords = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      phoneNumber,
      password: hashedPasswords,
    });
    await newUser.save();
    await generateToken(newUser._id, res);
    return res.json({
      message: "User registered successfully",
      textColor: "green",
    });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      return res.status(400).json({
        message: "Duplicate key error: Email or Phone Number already exists",
        textColor: "red",
      });
    }
    console.log(error);
    res.status(500).json({ message: "Server Error", textColor: "red" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, phoneNumber, password } = req.body;
    const user = await User.findOne({ email });
    const user1 = await User.findOne({ phoneNumber });

    if (!user && !user1) {
      return res
        .status(201)
        .json({ message: "Invalid Credentials", textColor: "red" });
    }

    const validUser = user || user1;
    const passwordMatch = await bcrypt.compare(password, validUser.password);
    if (!passwordMatch) {
      return res
        .status(201)
        .send({ message: "Invalid Credentials", textColor: "red" });
    }
    await generateToken(validUser._id, res);
    return res.json({ message: "Login Successful", textColor: "green" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", textColor: "red" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.json({ message: "Logout Successful", textColor: "green" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", textColor: "red" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", textColor: "red" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { name, email, phoneNumber, profilePic } = req.body; // `profilePic` is expected as a base64 string
    const user = req.user._id;

    let profilePicture = req.user.profilePicture; // Default to existing profile picture
    if (profilePic) {
      // Upload the new profile picture to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(profilePic, {
        folder: "profile_pictures", // Optional: Organize uploads in a folder
      });
      profilePicture = uploadResponse.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      user,
      {
        name: name || req.user.name,
        phoneNumber: phoneNumber || req.user.phoneNumber,
        email: email || req.user.email,
        profilePicture: profilePicture,
      },
      { new: true }
    );

    console.log(updatedUser);
    res.json({ message: "Profile Updated Successfully", textColor: "green" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", textColor: "red" });
  }
};
