import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../model/userModel.js";
import dotenv from "dotenv";
dotenv.config();

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("User Not Found");
    }
    isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json("invalid Password");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT_KEY, {
      expiresIn: "80hr",
    });
    res.json({ token, userId: user._id });
  } catch (error) {
    console.error("Unable to Login Due to : ", error);
    res.status(500).json("Internal Server Error!");
  }
}

export async function SignUp(req, res) {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      res
        .status(400)
        .json({ message: "The User is already have account! Login" });
    }
    const EncryptPassword = await bcrypt.hash(password, 10);
    const newUser = User.create({ username, email, password: EncryptPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT_KEY, {
      expiresIn: "80hr",
    });
    res
      .status(201)
      .json({ message: "SignUp Successfully","token":token ,userId: newUser._id });
    
  } catch (error) {
    console.error("Unable to SignUp Due to : ", error);
    res.status(500).json("Internal Server Error!");
  }
}
