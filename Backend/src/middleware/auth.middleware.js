import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const authenticate = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.jwt) {
      return res
        .status(401)
        .json({ message: "Unauthorized", textColor: "red" });
    }

    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_TOKEN); // Ensure JWT_TOKEN matches in .env
    const user = await User.findById(decoded.userId); // Use `userId` as per `generateToken`
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized", textColor: "red" });
    }

    req.user = user; // Attach user to req.user
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized", textColor: "red" });
  }
};
