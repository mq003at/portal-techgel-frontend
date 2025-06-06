// src/components/FileDropzone.tsx
import { useState, DragEvent, ReactNode } from 'react';

export interface FileDropzoneProps {
  onFiles: (files: FileList) => void;
  children?: ReactNode;
  dropzoneText?: string;
}

export function FileDropzone({
  onFiles,
  children,
  dropzoneText = 'Drag & drop files here',
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) {
      onFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={
        `border-2 rounded-lg p-6 text-center transition-colors ` +
        (isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white')
      }
    >
      <p className="text-gray-600">{dropzoneText}</p>
      {children}
    </div>
  );
}
