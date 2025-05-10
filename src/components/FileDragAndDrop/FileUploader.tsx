// src/components/FileUploader.tsx
import { useRef, useState, ChangeEvent } from 'react';
import { FileDropzone } from './FileDropzone';
import { UploadButton } from './UploadButton';

export interface ValidationRule {
  /** Unique name for debugging / logging */
  name: string;
  /**
   * Return true if file passes this rule;
   * can be async (e.g. image dimension check).
   */
  validate: (file: File) => boolean | Promise<boolean>;
  /** Message shown if test fails */
  errorMessage: string;
}

export interface FileUploaderProps {
  /** e.g. 'image/png', '.pdf', etc. */
  accept: string;
  /** List of tests to run, in order. */
  validationRules?: ValidationRule[];
  /** Called once the first rule-failure-free file is ready */
  onFileValid: (file: File) => void;
  /** Override dropzone instruction text */
  dropzoneText?: string;
  /** Override button label */
  buttonText?: string;
}

export function FileUploader({
  accept,
  validationRules = [],
  onFileValid,
  dropzoneText,
  buttonText,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = async (file: File) => {
    setError(null);
    for (const rule of validationRules) {
      const ok = await rule.validate(file);
      if (!ok) {
        setError(rule.errorMessage);
        return;
      }
    }
    onFileValid(file);
  };

  const handleFiles = (files: FileList) => {
    if (!files.length) return;
    processFile(files[0]);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  return (
    <div className="space-y-2">
      <FileDropzone onFiles={handleFiles} dropzoneText={dropzoneText}>
        <UploadButton onClick={() => inputRef.current?.click()} text={buttonText} />
      </FileDropzone>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={onInputChange}
      />

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
    </div>
  );
}
