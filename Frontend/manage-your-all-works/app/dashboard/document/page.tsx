"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

// Temporarily commenting out unused imports
// import { Document, Page } from "react-pdf"; // For PDF preview
// import * as XLSX from "xlsx"; // For Excel preview

interface DocumentData {
  _id: string;
  title: string;
  fileUrl: string;
  fileType: string;
  fileName: string;
  sharedWith: string[];
}

const DocumentPage = () => {
  // Temporarily commenting out unused state variables
  // const [documents, setDocuments] = useState<DocumentData[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    // Temporarily commenting out unused fetch function
    // const fetchDocuments = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:5000/api/document", {
    //       withCredentials: true,
    //     });
    //     setDocuments(response.data.documents);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Failed to fetch documents:", error);
    //     setLoading(false);
    //   }
    // };

    // fetchDocuments();
  }, []);

  // Temporarily commenting out unused upload handler
  // const handleUpload = async () => {
  //   if (!selectedFile) return;

  //   const formData = new FormData();
  //   formData.append("file", selectedFile);
  //   formData.append("title", newTitle);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/document/upload",
  //       formData,
  //       {
  //         withCredentials: true,
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     setDocuments((prev) => [...prev, response.data.document]);
  //     setSelectedFile(null);
  //     setNewTitle("");
  //   } catch (error) {
  //     console.error("Failed to upload document:", error);
  //   }
  // };

  // Temporarily commenting out unused delete handler
  // const handleDelete = async (id: string) => {
  //   try {
  //     console.log("Deleting document with ID:", id); // Debugging log
  //     await axios.delete(
  //       `http://localhost:5000/api/document/delete/${id}`,
  //       { withCredentials: true }
  //     );
  //     setDocuments((prev) => prev.filter((doc) => doc._id !== id));
  //   } catch (error) {
  //     console.error("Failed to delete document:", error);
  //   }
  // };

  // Temporarily commenting out unused renderPreview function
  // const renderPreview = (doc: DocumentData) => {
  //   if (doc.fileType === "pdf") {
  //     return (
  //       <Document file={`http://localhost:5000/${doc.fileUrl}`}>
  //         <Page pageNumber={1} />
  //       </Document>
  //     );
  //   } else if (doc.fileType === "xlsx") {
  //     return <p>Excel preview is not implemented yet.</p>; // Use SheetJS for Excel preview
  //   } else if (doc.fileType === "docx") {
  //     return <p>Word preview is not implemented yet.</p>;
  //   }
  //   return null;
  // };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Coming Soon!</h1>
        <div className="mb-5">
          <p>This section is under development.</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
