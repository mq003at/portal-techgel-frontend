import React, { useRef, useState } from 'react';
import Signature from '@uiw/react-signature';
import { FaMinus, FaUndo, FaDownload, FaSave, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { useCreateSignatureMutation, useDeleteSignatureMutation } from '../api/SignatureApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignatureManagerCreateImageSignaturePage() {
    const signatureRef = useRef<any>(null);
    const [size, setSize] = useState(6);
    const [smoothing, setSmoothing] = useState(0.46);
    const [thinning, setThinning] = useState(0.73);
    const [streamline, setStreamline] = useState(0.5);
    const { user } = useAppSelector((state) => state.auth);
    const [createSignature] = useCreateSignatureMutation();
    const [deleteSignature] = useDeleteSignatureMutation();
    const navigate = useNavigate();
    const [saving, setSaving] = useState(false);

    const handleClear = () => {
        signatureRef.current?.clear();
    };

    const handleDownload = () => {
        const svgEl = signatureRef.current.svg;
        if (svgEl) {
            const svgData = new XMLSerializer().serializeToString(svgEl);
            const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'signature.svg';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    const handleResetOptions = () => {
        setSize(6);
        setSmoothing(0.46);
        setThinning(0.73);
        setStreamline(0.5);
    };

    const handleSave = async () => {
        const svgEl = signatureRef.current?.svg;
        if (!svgEl) return;

        setSaving(true);

        const clonedSvg = svgEl.cloneNode(true) as SVGSVGElement;

        clonedSvg.removeAttribute('style');
        clonedSvg.style.border = 'none';

        const svgString = new XMLSerializer().serializeToString(clonedSvg);
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
        const svgFile = new File([svgBlob], `signature-${user?.id}.svg`, { type: 'image/svg+xml' });

        const formData = new FormData();
        formData.append('EmployeeId', String(user?.id));
        formData.append('File', svgFile);
        formData.append('FileName', svgFile.name);

        try {
            await createSignature(formData).unwrap();
            toast.success('Lưu chữ ký thành công!');
        } catch (error) {
            console.error(error);
            toast.error('Lỗi khi lưu chữ ký!');
        } finally {
            setSaving(false);
        }
    };

    
    // const handleSave = async () => {
    //     const svgEl = signatureRef.current?.svg;
    //     if (!svgEl) return;

    //     setSaving(true);

    //     try {
    //         // Clone SVG để xử lý
    //         const clonedSvg = svgEl.cloneNode(true) as SVGSVGElement;
    //         clonedSvg.removeAttribute('style');
    //         clonedSvg.style.border = 'none';

    //         const svgString = new XMLSerializer().serializeToString(clonedSvg);
    //         const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    //         const svgUrl = URL.createObjectURL(svgBlob);

    //         const img = new Image();
    //         img.crossOrigin = 'anonymous'; // Đề phòng CORS
    //         img.src = svgUrl;

    //         img.onload = async () => {
    //             // Lấy kích thước từ viewBox nếu có
    //             const viewBox = clonedSvg.getAttribute('viewBox');
    //             let width = 300, height = 100;

    //             if (viewBox) {
    //                 const [, , w, h] = viewBox.split(' ').map(Number);
    //                 width = w;
    //                 height = h;
    //             } else {
    //                 width = svgEl.clientWidth || 300;
    //                 height = svgEl.clientHeight || 100;
    //             }

    //             const canvas = document.createElement('canvas');
    //             canvas.width = width;
    //             canvas.height = height;

    //             const ctx = canvas.getContext('2d');
    //             if (!ctx) throw new Error('Không thể tạo context cho canvas');

    //             ctx.clearRect(0, 0, width, height);
    //             ctx.drawImage(img, 0, 0, width, height);

    //             // Chuyển canvas thành PNG
    //             canvas.toBlob(async (blob) => {
    //                 if (!blob) throw new Error('Không thể tạo ảnh PNG');

    //                 const pngFile = new File([blob], `signature-${user?.id}.png`, {
    //                     type: 'image/png',
    //                 });

    //                 const formData = new FormData();
    //                 formData.append('EmployeeId', String(user?.id));
    //                 formData.append('File', pngFile);
    //                 formData.append('FileName', pngFile.name);

    //                 await createSignature(formData).unwrap();
    //                 toast.success('Lưu chữ ký thành công!');
    //                 setSaving(false);
    //             }, 'image/png');
    //         };

    //         img.onerror = () => {
    //             throw new Error('Không thể tải SVG thành hình ảnh');
    //         };
    //     } catch (error) {
    //         console.error(error);
    //         toast.error('Lỗi khi lưu chữ ký!');
    //         setSaving(false);
    //     }
    // };



    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-8 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-extrabold text-indigo-700 tracking-wide">Ký tên tại đây</h1>
                <button
                    onClick={() => navigate('/main/signature-manager/')}
                    className="btn flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow"
                >
                    <FaMinus /> Quay lại
                </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-10">
                {/* Signature Canvas */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col">
                    <Signature
                        ref={signatureRef}
                        style={{ borderRadius: 12, border: '2px solid #a5b4fc', flexGrow: 1 }}
                        color="#4c51bf"
                        options={{ size, smoothing, thinning, streamline }}
                    />
                    <p className="mt-3 text-center text-sm text-indigo-600">Vẽ chữ ký của bạn trong khung bên trên</p>
                </div>

                {/* Controls */}
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-8">
                    {/* Sliders */}
                    <div className="space-y-6">
                        {/* Size */}
                        <div>
                            <label htmlFor="size" className="block font-semibold text-indigo-700 mb-1">
                                Kích thước: <span className="text-indigo-900 font-bold">{size}</span>
                            </label>
                            <input
                                id="size"
                                type="range"
                                min={1}
                                max={50}
                                value={size}
                                onChange={(e) => setSize(parseInt(e.target.value))}
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        {/* Smoothing */}
                        <div>
                            <label htmlFor="smoothing" className="block font-semibold text-indigo-700 mb-1">
                                Làm mượt: <span className="text-indigo-900 font-bold">{smoothing.toFixed(2)}</span>
                            </label>
                            <input
                                id="smoothing"
                                type="range"
                                min={-0.99}
                                max={0.99}
                                step={0.01}
                                value={smoothing}
                                onChange={(e) => setSmoothing(parseFloat(e.target.value))}
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        {/* Thinning */}
                        <div>
                            <label htmlFor="thinning" className="block font-semibold text-indigo-700 mb-1">
                                Làm mảnh: <span className="text-indigo-900 font-bold">{thinning.toFixed(2)}</span>
                            </label>
                            <input
                                id="thinning"
                                type="range"
                                min={-0.99}
                                max={0.99}
                                step={0.01}
                                value={thinning}
                                onChange={(e) => setThinning(parseFloat(e.target.value))}
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        {/* Streamline */}
                        <div>
                            <label htmlFor="streamline" className="block font-semibold text-indigo-700 mb-1">
                                Làm trơn nét vẽ: <span className="text-indigo-900 font-bold">{streamline.toFixed(2)}</span>
                            </label>
                            <input
                                id="streamline"
                                type="range"
                                min={0.01}
                                max={0.99}
                                step={0.01}
                                value={streamline}
                                onChange={(e) => setStreamline(parseFloat(e.target.value))}
                                className="w-full accent-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={handleClear}
                            className="btn flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow"
                        >
                            <FaTrashAlt /> Xóa
                        </button>
                        <button
                            onClick={handleResetOptions}
                            className="btn flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded shadow"
                        >
                            <FaUndo /> Đặt lại
                        </button>
                        <button
                            onClick={handleDownload}
                            className="btn flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow"
                        >
                            <FaDownload /> Tải về
                        </button>
                        <button
                            onClick={handleSave}
                            className="btn flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow"
                        >
                            <FaSave /> Lưu
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast */}
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Saving Overlay */}
            {saving && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg animate-fade-in">
                        <svg className="animate-spin h-10 w-10 text-indigo-600" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            />
                        </svg>
                        <p className="text-indigo-700 font-medium text-lg">Đang lưu chữ ký...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignatureManagerCreateImageSignaturePage;
