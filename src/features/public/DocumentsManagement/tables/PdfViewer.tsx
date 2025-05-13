import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useSearchParams } from 'react-router';

export function PDFPage() {
    const [searchParams] = useSearchParams();
    const fileUrl =  searchParams.get('file') || '';

    return (
    <div style={{ height: '750px' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={fileUrl} />
        </Worker>
    </div>
    );
}
