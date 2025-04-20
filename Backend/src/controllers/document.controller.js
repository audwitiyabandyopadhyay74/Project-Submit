import Document from "../model/document.model.js";
import path from "path";

// Upload a new document
export const uploadDocument = async (req, res) => {
  try {
    console.log("File uploaded:", req.file); // Debugging log
    console.log("Request body:", req.body); // Debugging log

    const { title } = req.body;
    const fileUrl = req.file.path; // Path to the uploaded file
    const fileType = path.extname(req.file.originalname).substring(1); // File extension
    const fileName = req.file.originalname; // Original file name
    const owner = req.user._id; // Assuming user is authenticated

    const newDocument = new Document({ title, fileUrl, fileType, fileName, owner });
    await newDocument.save();

    res.status(201).json({ message: "Document uploaded successfully", document: newDocument });
  } catch (error) {
    console.error("Error uploading document:", error); // Debugging log
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all documents for the logged-in user
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ owner: req.user._id });
    res.status(200).json({ documents });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Edit a document
export const editDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedDocument = await Document.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res
      .status(200)
      .json({
        message: "Document updated successfully",
        document: updatedDocument,
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete a document
export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Request ID:", id);

    const document = await Document.findById(id);
    console.log("Document found in database:", document);

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    const deletedDocument = await Document.findByIdAndDelete(id);
    console.log("Deleted Document:", deletedDocument);

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Share a document
export const shareDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body; // User to share the document with

    const document = await Document.findById(id);

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    document.sharedWith.push(userId);
    await document.save();

  }
    res.status(200).json({ message: "Document shared successfully", document });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

};
