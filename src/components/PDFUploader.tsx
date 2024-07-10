// src/components/PDFUploader.tsx
import React, { useState } from 'react';
import { uploadPDF } from '../services/pdf';

const PDFUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      try {
        await uploadPDF(file, `pdfs/${file.name}`);
        alert('PDF uploaded successfully!');
      } catch (error) {
        console.error('Error uploading PDF:', error);
        alert('Failed to upload PDF.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button type="submit" disabled={!file}>Upload PDF</button>
    </form>
  );
};

export default PDFUploader;