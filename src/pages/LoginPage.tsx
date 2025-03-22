import LoginBox from "../components/LoginPage/LoginBox";
import ImageWrapper from "../components/Wrapper/ImageWrapper";

export default function LoginPage() {
  return (
    <div
      className="flex flex-col gap-[25px] items-center justify-center min-h-screen bg-white w-full h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('assets/portal-cover.png')` }}
    >
      <div>
        <ImageWrapper
          src={'assets/logo-main-600-150-transparent.png'}
          alt="Logo-Techgel"
          title="Logo Techgel"
          height={60}
          width={250}
        />
      </div>
      <LoginBox />
    </div>
  );
}
