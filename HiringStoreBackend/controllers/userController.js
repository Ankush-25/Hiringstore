const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel.js");
const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("User Not Found");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json("invalid Password");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT_KEY, {
      expiresIn: "80hr",
    });
    res.json({message: "Login Successfully ", 'token': token, userId: user._id });
  } catch (error) {
    console.error("Unable to Login Due to : ", error);
    res.status(500).json("Internal Server Error!");
  }
}

const SignUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (user) {
      return res
        .status(400)
        .json({ message: "The User already has an account! Login" });
    }
    const EncryptPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: EncryptPassword,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECERT_KEY, {
      expiresIn: "80hr",
    });

    return res
      .status(201)
      .json({
        message: "SignUp Successfully",
        token: token,
        userId: newUser._id,
      });
  } catch (error) {
    console.error("Unable to SignUp Due to : ", error);
    res.status(500).json("Internal Server Error!");
  }
}

const deleteUser = async (req, res) => {
  const userId = req.params.ID
  
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error while deleting the user", error);
    res.status(500).json("Internal Server Error")
    
  }
}

const refreshToken = async (req, res) => {
  try {
    const { userId, token } = req.body;
    
    if (!userId || !token) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    
    // Verify the existing token
    try {
      jwt.verify(token, process.env.JWT_SECERT_KEY);
    } catch (error) {
      // If token is invalid or expired, return error
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Generate a new token
    const newToken = jwt.sign({ id: user._id }, process.env.JWT_SECERT_KEY, {
      expiresIn: "80hr",
    });
    
    // Return the new token
    return res.status(200).json({
      message: "Token refreshed successfully",
      token: newToken,
      userId: user._id
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  login,
  SignUp,
  deleteUser,
  refreshToken
};