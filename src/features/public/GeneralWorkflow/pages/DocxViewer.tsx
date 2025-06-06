import React, { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';

interface DocxViewerProps {
  blob: Blob;
}

const DocxViewer: React.FC<DocxViewerProps> = ({ blob }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blob && containerRef.current) {
      // Clear nội dung cũ
      containerRef.current.innerHTML = '';

      // Gọi renderAsync với đúng định dạng
      renderAsync(blob, containerRef.current, undefined, {
        className: 'docx-preview',
        inWrapper: true,
        ignoreWidth: false,
        ignoreHeight: false,
        breakPages: true,
      }).catch((err) => {
        console.error('Lỗi khi hiển thị DOCX:', err);
      });
    }
  }, [blob]);

  return (
    <div
      ref={containerRef}
    />
  );
};

export default DocxViewer;
