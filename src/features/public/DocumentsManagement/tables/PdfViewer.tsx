// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { useSearchParams } from 'react-router';
// import { PDFDocument } from 'pdf-lib';
// import { useRef, useState, useEffect } from 'react';

// export function PDFPage() {
//     const [searchParams] = useSearchParams();
//     const fileUrl = searchParams.get('file') || '';
//     const [signatureImage, setSignatureImage] = useState<File | null>(null);
//     const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
//     const [signedPdfUrl, setSignedPdfUrl] = useState<string | null>(null);
//     const [pdfSize, setPdfSize] = useState<{ width: number; height: number } | null>(null);
//     const [canvasSize, setCanvasSize] = useState<{ width: number; height: number } | null>(null);
//     const viewerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const fetchPdfSize = async () => {
//             const bytes = await fetch(fileUrl).then(res => res.arrayBuffer());
//             const pdfDoc = await PDFDocument.load(bytes);
//             const page = pdfDoc.getPage(0);
//             setPdfSize({ width: page.getWidth(), height: page.getHeight() });
//         };
//         fetchPdfSize();
//     }, [fileUrl]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const canvas = document.querySelector('.rpv-core__page-layer canvas') as HTMLCanvasElement;
//             if (canvas && canvas.clientWidth > 0 && canvas.clientHeight > 0) {
//                 setCanvasSize({ width: canvas.clientWidth, height: canvas.clientHeight });
//                 clearInterval(interval);
//             }
//         }, 300);

//         return () => clearInterval(interval);
//     }, [fileUrl]);

//     const handleSignatureImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files?.[0]) {
//             setSignatureImage(e.target.files[0]);
//         }
//     };

//     const addSignature = async () => {
//         if (!clickPosition || !signatureImage || !pdfSize || !canvasSize) {
//             alert('Vui lòng chọn chữ ký và click vào trang PDF!');
//             return;
//         }

//         const existingPdfBytes = await fetch(fileUrl).then(res => res.arrayBuffer());
//         const pdfDoc = await PDFDocument.load(existingPdfBytes);
//         const page = pdfDoc.getPage(0);

//         const imageBytes = await signatureImage.arrayBuffer();
//         const image = await pdfDoc.embedPng(imageBytes);
//         const { width: imgWidth, height: imgHeight } = image;

//         const scaleX = pdfSize.width / canvasSize.width;
//         const scaleY = pdfSize.height / canvasSize.height;

//         const pdfX = clickPosition.x * scaleX;
//         const pdfY = pdfSize.height - clickPosition.y * scaleY;

//         page.drawImage(image, {
//             x: pdfX - imgWidth / 2,
//             y: pdfY - imgHeight / 2,
//             width: imgWidth,
//             height: imgHeight,
//         });

//         const modifiedPdfBytes = await pdfDoc.save();
//         const blob = new Blob([modifiedPdfBytes.slice().buffer], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);
//         setSignedPdfUrl(url);
//         window.open(url);
//     };

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <div className="flex flex-wrap gap-4 mb-6 justify-center items-center">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleSignatureImageChange}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
//                 />
//                 <button
//                     onClick={addSignature}
//                     className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
//                 >
//                     Thêm chữ ký
//                 </button>
//                 {signedPdfUrl && (
//                     <a
//                         href={signedPdfUrl}
//                         download="signed.pdf"
//                         className="px-5 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
//                     >
//                         Tải PDF đã ký
//                     </a>
//                 )}
//             </div>

//             <div className="border shadow rounded bg-white" style={{ maxWidth: pdfSize?.width, maxHeight: pdfSize?.height }}>
//                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//                     <div
//                         className="relative border overflow-auto"
//                         ref={viewerRef}
//                         style={{ maxWidth: pdfSize?.width, maxHeight: pdfSize?.height }}
//                     >
//                         <div
//                             className="absolute inset-0 min-w-full h-full min-h-full z-10 "
//                             onClick={(e) => {
//                                 const rect = viewerRef.current?.getBoundingClientRect();
//                                 if (!rect) return;
//                                 const x = e.clientX - rect.left;
//                                 const y = e.clientY - rect.top;
//                                 setClickPosition({ x, y });
//                             }}
//                             style={{ cursor: 'crosshair' }}
//                         />

//                         {clickPosition && signatureImage && (
//                             <img
//                                 src={URL.createObjectURL(signatureImage)}
//                                 className="absolute z-20 pointer-events-none"
//                                 style={{
//                                     top: `${clickPosition.y}px`,
//                                     left: `${clickPosition.x}px`,
//                                     transform: 'translate(-50%, -50%)',
//                                     height: 'auto',
//                                     width: 'auto',
//                                 }}
//                                 alt="Signature preview"
//                             />
//                         )}

//                         <Viewer fileUrl={fileUrl} />
//                     </div>
//                 </Worker>
//             </div>
//         </div>
//     );
// }






import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';
import { useSearchParams } from 'react-router';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

export function PDFPage() {
    const [searchParams] = useSearchParams();
    const [fileUrl, setFileUrl] = useState<string>(searchParams.get('file') || '');
    const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInput, setPageInput] = useState(currentPage);
    const [canvasSize, setCanvasSize] = useState<{ width: number; height: number } | null>(null);
    const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
    const [signatureImage, setSignatureImage] = useState<File | null>(null);
    const [signedPdfUrl, setSignedPdfUrl] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Load PDF
    useEffect(() => {
        const loadPdf = async () => {
            const loadingTask = pdfjsLib.getDocument(fileUrl);
            const doc = await loadingTask.promise;
            setPdfDoc(doc);
            setNumPages(doc.numPages);
        };
        loadPdf();
    }, [fileUrl]);

    // Change page input
    useEffect(() => {
        setPageInput(currentPage);
    }, [currentPage]);

    // Render current page
    useEffect(() => {
        const render = async () => {
            if (!pdfDoc || !canvasRef.current) return;
            const page = await pdfDoc.getPage(currentPage);
            const viewport = page.getViewport({ scale: 1.5 });

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')!;
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            setCanvasSize({ width: viewport.width, height: viewport.height });

            await page.render({ canvasContext: context, viewport }).promise;
        };
        render();
    }, [pdfDoc, currentPage]);

    // Handle click on canvas
    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setClickPosition({ x, y });
    };

    const clearSignature = () => {
        setClickPosition(null);
        setSignatureImage(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const addSignature = async () => {
        if (!signatureImage || !clickPosition || !canvasSize || !pdfDoc) {
            alert('Vui lòng chọn ảnh chữ ký và click vào trang');
            return;
        }

        const existingPdfBytes = await fetch(fileUrl).then(res => res.arrayBuffer());
        const pdf = await PDFDocument.load(existingPdfBytes);
        const imageBytes = await signatureImage.arrayBuffer();

        const embeddedImage = await pdf.embedPng(imageBytes);
        let { width: imgWidth, height: imgHeight } = embeddedImage;

        console.log(imgWidth, imgHeight)

        const page = pdf.getPages()[currentPage - 1];
        const pdfWidth = page.getWidth();
        const pdfHeight = page.getHeight();

        const scaleX = pdfWidth / canvasSize.width;
        const scaleY = pdfHeight / canvasSize.height;

        const xInPdf = clickPosition.x * scaleX;
        const yInPdf = pdfHeight - clickPosition.y * scaleY;

        page.drawImage(embeddedImage, {
            x: xInPdf - imgWidth * scaleX / 2,
            y: yInPdf - imgHeight * scaleY / 2,
            width: imgWidth * scaleX,
            height: imgHeight * scaleY,
        });

        const modifiedBytes = await pdf.save();
        const blob = new Blob([modifiedBytes.slice().buffer], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setSignedPdfUrl(url);
        window.open(url);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
            <div className="flex gap-4 mb-4 items-center">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Chọn ảnh chứa chữ ký</legend>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setSignatureImage(e.target.files?.[0] || null)}
                        ref={fileInputRef}
                        className="file-input"
                    />
                    <label className="label">PNG, JPG, JIFF, ...</label>
                </fieldset>
                <button onClick={addSignature} className="btn btn-primary">
                    Thêm chữ ký
                </button>
                <button
                    onClick={clearSignature}
                    className="btn btn-secondary"
                >
                    Xóa chữ ký
                </button>
            </div>

            <div className="relative">
                <canvas ref={canvasRef} onClick={handleCanvasClick} style={{ cursor: 'crosshair' }} />

                {clickPosition && signatureImage && canvasSize && (
                    <img
                        src={URL.createObjectURL(signatureImage)}
                        alt="signature preview"
                        style={{
                            position: 'absolute',
                            top: `${clickPosition.y}px`,
                            left: `${clickPosition.x}px`,
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </div>

            <div className="mt-6 flex justify-center items-center gap-6">
                <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg shadow transition 
                        ${currentPage === 1 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    ← Trang trước
                </button>

                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={pageInput}
                        onChange={(e) => setPageInput(Number(e.target.value))}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const page = Math.max(1, Math.min(numPages, pageInput));
                                setCurrentPage(page);
                            }
                        }}
                        className="w-20 text-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-lg text-gray-700">/ {numPages}</span>
                </div>

                <button
                    onClick={() => setCurrentPage(p => Math.min(numPages, p + 1))}
                    disabled={currentPage === numPages}
                    className={`px-4 py-2 rounded-lg shadow transition 
                        ${currentPage === numPages 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    Trang sau →
                </button>
            </div>


        </div>
    );
}
