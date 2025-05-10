// src/components/UploadButton.tsx
import { MouseEventHandler } from 'react';

export interface UploadButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export function UploadButton({ onClick, text = 'Select file…' }: UploadButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
    >
      {text}
    </button>
  );
}
