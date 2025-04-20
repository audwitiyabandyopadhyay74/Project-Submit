import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
  updateUserProfile,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/checkAuth", authenticate, checkAuth);
router.put("/updateUserProfile", authenticate, updateUserProfile);

export default router;
