import { useState } from "react";
import { useNavigate } from "react-router";
import NeedHelpLoginPopover from "./NeedHelpLoginPopover";

const techgelTester = {
  mainId: "techgel-test",
  password: "Techgel.com",
};

export default function LoginBox() {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mainId, setMainId] = useState(
    () => localStorage.getItem("loginMainId") || ""
  );
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(mainId, password)
    if (
      mainId === techgelTester.mainId &&
      password === techgelTester.password
    ) {
      if (rememberMe) {
        localStorage.setItem("loginMainId", mainId);
      } else {
        localStorage.removeItem("loginMainId");
      }
      navigate("/main/announcement");
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
    }
  };

  return (
    <div className="transparent w-[400px] p-6 text-center text-black relative">
      {showHelp && <NeedHelpLoginPopover onClose={() => setShowHelp(false)} />}
      <h2 className="text-2xl font-bold tracking-wide text-center">
        CỔNG THÔNG TIN TECHGEL{" "}
      </h2>{" "}
      <p className="mt-4 text-sm text-black">
        Xin vui lòng đăng nhập để tiếp tục.
      </p>
      <form
        className="mt-6 space-y-4 justify-items-center"
        onSubmit={handleLogin}
      >
        <div className="form-group w-[300px]">
          <label className="input input-bordered flex items-center gap-2 focus-within:outline focus-within:border-red-500 focus-within:outline-red-500">
            {" "}
            <i className="icon-user"></i>
            <input
              type="text"
              placeholder="Mã nhân viên"
              className="bg-white placeholder-gray-600 text-black"
              value={mainId}
              onChange={(e) => setMainId(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group w-[300px]">
          <label className="input input-bordered flex items-center gap-2 focus-within:outline focus-within:border-red-500 focus-within:outline-red-500">
            {" "}
            <i className="icon-lock"></i>
            <input
              type="password"
              placeholder="Mật khẩu"
              className="bg-white placeholder-gray-600 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex justify-center mt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Nhớ tên tài khoản
          </label>
        </div>

        <button
          type="submit"
          className="btn bg-white text-black w-[300px] mt-4 card-actions content-center"
        >
          <i className="icon-check"></i> Đăng nhập
        </button>
      </form>
      <div className="mt-4 border-t border-gray-500 pt-2">
        <a
          className="text-black text-sm underline hover:cursor-pointer"
          onClick={() => setShowHelp(true)}
        >
          Quên mật khẩu?
        </a>
      </div>
      <p className="text-xs text-gray-500 mt-1">Copyright© 2025 by Techgel</p>
      <p className="absolute bottom-[2px] right-4 text-[11px] text-gray-400">
        version 0.25.0326-1.0.1-beta
      </p>
    </div>
  );
}
