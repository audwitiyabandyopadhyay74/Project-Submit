import express from "express";
import {
  uploadDocument,
  getDocuments,
  editDocument,
  deleteDocument,
  shareDocument,
} from "../controllers/document.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js"; // Middleware for authentication
import { upload } from "../middleware/document.middleware.js"; // File upload middleware

const router = express.Router();

// Routes
router.post("/upload", authenticateUser, upload.single("file"), uploadDocument); // Ensure this route is defined
router.get("/", authenticateUser, getDocuments);
router.put("/edit/:id", authenticateUser, editDocument);
router.delete("/delete/:id", authenticateUser, deleteDocument);
router.post("/share/:id", authenticateUser, shareDocument);

export default router;
