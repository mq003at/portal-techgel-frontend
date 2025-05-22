import { useEffect } from "react";

import { IStaticMethods } from "flyonui/flyonui";
import { Route, Routes, useLocation } from "react-router";
import pkg from "../package.json";
import LoginPage from "./features/public/LoginPage/pages/LoginPage";
import Body from "./pages/Body";
import { PDFPage } from "./features/public/DocumentsManagement/tables/PdfViewer";

console.log("DaisyUI version:", (pkg.dependencies as any)["daisyui"]);

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-base-200/60">
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main/*" element={<Body />} />
          <Route path="/pdf-viewer" element={<PDFPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
