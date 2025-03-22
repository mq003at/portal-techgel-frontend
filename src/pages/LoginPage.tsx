import { useMemo } from "react";
import LoginBox from "../components/LoginPage/LoginBox";
import ImageWrapper from "../components/Wrapper/ImageWrapper";

const backgrounds = [
  "assets/background-login-1.jpg",
  "assets/background-login-2.jpg",
  "assets/background-login-3.jpg",
  "assets/background-login-4.jpg",
];

export default function LoginPage() {
  const selectedBackground = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  }, []);
  return (
    <div
      className="flex flex-col gap-[25px] items-center justify-center min-h-screen bg-white w-full h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${selectedBackground})` }}
    >
      <div className="card bg-white shadow-xl rounded-xl p-6 w-full max-w-md z-10 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <ImageWrapper
            src={"assets/logo-main-600-150-transparent.png"}
            alt="Logo-Techgel"
            title="Logo Techgel"
            height={60}
            width={250}
          />

          <LoginBox />
        </div>
      </div>
    </div>
  );
}
