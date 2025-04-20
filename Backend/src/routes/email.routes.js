import express from "express";
import {
  sendEmail,
  replyEmail,
  getEmails,
  deleteEmail,
} from "../controllers/email.controller.js";

const router = express.Router();

router.post("/sendEmail", sendEmail);
router.post("/replyEmail", replyEmail);
router.get("/getEmail", getEmails);
router.delete("/deleteEmail/:messageId", deleteEmail);

export default router;
