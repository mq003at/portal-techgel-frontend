import { useEffect } from "react";

import { IStaticMethods } from "flyonui/flyonui";
import { Route, Routes, useLocation } from "react-router";
import LoginPage from "./pages/LoginPage";
import Body from "./pages/Body";
import pkg from "../package.json";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
