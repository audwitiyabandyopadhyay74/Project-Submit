"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Squares from "../../components/Squares";
import { ReactPhotoEditor } from "react-photo-editor";

const PhotoEditing = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Show modal if a file is selected
  const showModalHandler = () => {
    if (file) {
      setShowModal(true);
    } else {
      alert("Please upload a photo first!");
    }
  };

  // Hide modal
  const hideModal = () => {
    setShowModal(false);
  };

  // Save edited image
  const handleSaveImage = (editedFile: File) => {
    setFile(editedFile);
    alert("Image saved successfully!");
  };

  // Handle file input
  const setFileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Squares />
      <Sidebar />
      <div className="flex-1 p-10 flex flex-col items-center justify-center z-100" >
        <h1 className="text-4xl font-bold mb-8">Photo Editor</h1>
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">

            {/* <label className="block font-semibold mb-2">Upload Photo:</label> */}
            <input
              type="file"
              onChange={setFileData}
              className="border-4 h-10 p-2 w-full rounded-md  bg-[#000] text-black "
              accept="image/*"
              placholder="Choose a Photo to edit"
              onSelect={showModalHandler}
              />
          <button
            onClick={showModalHandler}
            // className="bg-blue-500 text-black border-4 px-4 py-2 rounded-md w-full"
            style={{
              backgroundColor: "#fff",
            color:"#000",
            border: "2px solid #000",
            borderRadius: "6px",	
            width:"20vh"
            }}
            >
                Edit Photo
          </button>
                </div>
        </div>
              </div>
        {file && (
          <ReactPhotoEditor
            open={showModal}
            onClose={hideModal}
            file={file}
            allowColorEditing={true}
            allowFlip={true}
            allowRotate={true}
            allowZoom={true}
            onSaveImage={handleSaveImage}
            downloadOnSave={true}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoEditing;
