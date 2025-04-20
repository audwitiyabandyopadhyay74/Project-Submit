"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { Document, Page } from "react-pdf"; // For PDF preview
import * as XLSX from "xlsx"; // For Excel preview

interface DocumentData {
  _id: string;
  title: string;
  fileUrl: string;
  fileType: string;
  fileName: string;
  sharedWith: string[];
}

const DocumentPage = () => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/document", {
          withCredentials: true,
        });
        setDocuments(response.data.documents);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch documents:", error);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", newTitle);

    try {
      const response = await axios.post("http://localhost:5000/api/document/upload", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDocuments((prev) => [...prev, response.data.document]);
      setSelectedFile(null);
      setNewTitle("");
    } catch (error) {
      console.error("Failed to upload document:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      console.log("Deleting document with ID:", id); // Debugging log
      await axios.delete(`http://localhost:5000/api/document/delete/${id}`, {
        withCredentials: true,
      });
      setDocuments((prev) => prev.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error("Failed to delete document:", error);
    }
  };

  const renderPreview = (doc: DocumentData) => {
    if (doc.fileType === "pdf") {
      return (
        <Document file={`http://localhost:5000/${doc.fileUrl}`}>
          <Page pageNumber={1} />
        </Document>
      );
    } else if (doc.fileType === "xlsx") {
      return <p>Excel preview is not implemented yet.</p>; // Use SheetJS for Excel preview
    } else if (doc.fileType === "docx") {
      return <p>Word preview is not implemented yet.</p>;
    }
    return null;
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
    Coming Soon!
      {/* <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Documents</h1>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            className="border p-2 mr-2"
          />
          <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2">
            Upload
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {documents.map((doc) => (
              <li key={doc._id} className="border p-2 mb-2">
                <h2 className="font-bold">{doc.title}</h2>
                {renderPreview(doc)}
                <button
                  onClick={() => handleDelete(doc._id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default DocumentPage;