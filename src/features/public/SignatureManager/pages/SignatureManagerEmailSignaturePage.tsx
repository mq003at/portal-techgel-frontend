import { useRef } from 'react';
import ImageWrapper from '../../../../components/Wrapper/ImageWrapper';

export default function SignatureManagerEmailSignaturePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (!containerRef.current || !navigator.clipboard) return;
    const html = containerRef.current.outerHTML;

    // Copy HTML (with inline styles) so Word will pick up the styling
    const blob = new Blob([html], { type: 'text/html' });
    const item = new ClipboardItem({ 'text/html': blob });
    await navigator.clipboard.write([item]);
  };

  return (
    <div className="max-w-lg p-4 bg-white border rounded shadow-sm">
      <div
        ref={containerRef}
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: 1.4,
          color: '#000',
        }}
      >
        {/* Name: use a span, not an h4 */}
        <p
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: '16px',
            color: '#073763',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <span style={{ fontWeight: 700, color: '#073763', fontSize: '16px' }}>
            Nguyễn Hoàng Minh Quân
          </span>
        </p>

        {/* Job title */}
        <p style={{ margin: '2px 0', fontSize: '14px' }}>Nhân viên Lập Trình Web</p>

        {/* Mobile */}
        <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
          <span style={{ fontWeight: 500 }}>Di động:</span> +84 812 590 498
        </p>

        {/* Email */}
        <p style={{ margin: '4px 0 0', fontSize: '14px' }}>
          <span style={{ fontWeight: 500 }}>Email:</span> quan.nhm@techgel.com
        </p>

        <ImageWrapper
          src={'../assets/logo-main-600-150-transparent.png'}
          alt="Logo-Techgel"
          title="Logo Techgel"
          height={60}
          width={250}
        />

        {/* Company info */}
        <p style={{ margin: '12px 0 2px', fontWeight: 700, textTransform: 'uppercase' }}>
          CÔNG TY CỔ PHẦN KỸ THUẬT CÔNG NGHỆ SÀI GÒN
        </p>
        <p style={{ margin: '2px 0 8px', fontWeight: 700, textTransform: 'uppercase' }}>
          SAI GON TECHNOLOGIES, INC
        </p>
        <p style={{ margin: '0 0 8px' }}>
          Add: 30 Phan Chu Trinh, Ward 2, Binh Thanh Dist., HCMC, Viet Nam
        </p>

        {/* Contact table */}
        <table border={0} style={{ width: '100%', borderCollapse: 'collapse', border: 0 }}>
          <tbody>
            <tr>
              <td style={{ border: 0, paddingRight: '1.5rem', verticalAlign: 'top' }}>
                <span style={{ fontWeight: 500 }}>Tel:</span> (+84) 28 35107030
              </td>
              <td style={{ border: 0, verticalAlign: 'top' }}>
                <span style={{ fontWeight: 500 }}>Fax:</span> (+84) 28 35107028
              </td>
            </tr>
            <tr>
              <td style={{ border: 0, paddingRight: '1.5rem', verticalAlign: 'top' }}>
                <span style={{ fontWeight: 500 }}>Website:</span> www.techgel.com
              </td>
              <td style={{ border: 0, verticalAlign: 'top' }}>
                <span style={{ fontWeight: 500 }}>Email:</span> techgel@techgel.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 focus:outline-none"
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}
