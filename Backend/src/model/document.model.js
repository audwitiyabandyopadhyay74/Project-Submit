import mongoose from "mongoose";

const documentSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    fileUrl: { type: String, required: true }, // URL of the uploaded file
    fileType: { type: String, required: true }, // e.g., "pdf", "docx", "xlsx"
    fileName: { type: String, required: true }, // Original file name
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users the document is shared with
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
