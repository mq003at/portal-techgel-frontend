import React, { useRef, useState } from 'react';
import Signature from '@uiw/react-signature';

function SignatureManagerCreateImageSignaturePage() {
  const signatureRef = useRef<any>(null);
  const [size, setSize] = useState(6);
  const [smoothing, setSmoothing] = useState(0.46);
  const [thinning, setThinning] = useState(0.73);
  const [streamline, setStreamline] = useState(0.5);

    const handleClear = () => {
        signatureRef.current?.clear();
    };

    const handleDownload = () => {
        const svgEl = signatureRef.current.svg;

        if(svgEl){
            const svgData = new XMLSerializer().serializeToString(svgEl);
            const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "signature.svg";
            a.click();

            URL.revokeObjectURL(url);
        }
    };

    const handleResetOptions = () => {
        setSize(6); 
        setSmoothing(0.46);
        setThinning(0.73);
        setStreamline(0.5);
    }

    const handleCopySVG = async () => {
        const svgData = signatureRef.current.svg.outerHTML;
        if (svgData) {
            await navigator.clipboard.writeText(svgData);
            alert('Đã copy SVG vào clipboard!');
        }
    };

    const handleSave = async () => {
        const svgEl = signatureRef.current.svg;
        const svgString = new XMLSerializer().serializeToString(svgEl);
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
        const svgFile = new File([svgBlob], 'signature.svg', { type: 'image/svg+xml' });
    }


    return (
        <div className="p-10">
        <h2>Ký tên tại đây:</h2>
        <div className="flex justify-between items-center">
            <div
                style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "1rem" }}
                >
                <label>
                    <div>Size: {size}</div>
                    <input type="range" max={50} min={1} defaultValue={6} onChange={(e) => setSize(parseInt(e.target.value))} />
                </label>
                <label>
                    <div>Smoothing: {smoothing}</div>
                    <input
                        type="range"
                        max="0.99"
                        min="-0.99"
                        step="0.01"
                        defaultValue="0.46"
                        onChange={(e) => setSmoothing(parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    <div>Thinning: {thinning}</div>
                    <input
                        type="range"
                        max="0.99"
                        min="-0.99"
                        step="0.01"
                        defaultValue="0.73"
                        onChange={(e) => setThinning(parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    <div>Streamline: {streamline}</div>
                    <input type="range" max="0.99" min="0.01" step="0.01" defaultValue="0.5" onChange={(e) => setStreamline(parseFloat(e.target.value))} />
                </label>
            </div>
            <div className="flex flex-wrap gap-[0.51rem] pt-[0.46rem]" style={{ marginTop: 10 }}>
                <button onClick={handleClear} className="btn btn-accent">Clear</button>
                <button onClick={handleResetOptions} className="btn btn-neutral">Reset Options</button>
                {/* <button onClick={handleCopySVG} className="btn btn-error">Copy to SVG</button> */}
                <button onClick={handleDownload} className="btn btn-secondary">Download Image</button>
                <button onClick={handleSave} className="btn btn-primary">Save Image</button>
            </div>
        </div>
        <Signature
            ref={signatureRef}
            style={{ border: '1px solid #ccc', width: '100%', height: 'calc(100vh - 40px - 142px - 48px)' }}
            color="black"
            options={{
                size,
                smoothing,
                thinning,
                streamline,
            }}
        />
        </div>
    );
}

export default SignatureManagerCreateImageSignaturePage;
