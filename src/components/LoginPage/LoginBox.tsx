import { useState } from "react";
import { useNavigate } from "react-router";
import NeedHelpLoginPopover from "./NeedHelpLoginPopover";

const techgelTester = {
  username: "techgel-test",
  password: "Techgel.com",
};

export default function LoginBox() {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const navigate = useNavigate();

  // ✅ Add missing state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === techgelTester.username &&
      password === techgelTester.password
    ) {
      navigate("/main/announcement");
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
    }
  };

  return (
    <div className="transparent w-[400px] p-6 text-center text-black relative">
      {showHelp && <NeedHelpLoginPopover onClose={() => setShowHelp(false)} />}
      <h2 className="text-2xl font-bold tracking-wide text-center">
        CỔNG DỊCH VỤ TECHGEL{" "}
      </h2>{" "}
      <p className="mt-4 text-sm text-black">
        Xin vui lòng đăng nhập bằng Tài Khoản và Mật Khẩu được cung cấp.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleLogin}>
        <div className="form-group">
          <label className="input input-bordered flex items-center gap-2">
            <i className="icon-user"></i>
            <input
              type="text"
              placeholder="Mã nhân viên"
              className="bg-white placeholder-gray-600 text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label className="input input-bordered flex items-center gap-2">
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
            <input type="checkbox" className="checkbox" />
            Nhớ tên tài khoản
          </label>
        </div>

        <button
          type="submit"
          className="btn bg-white text-black w-full mt-4 card-actions content-center"
        >
          <i className="icon-check"></i> Đăng nhập
        </button>
      </form>
      <div className="mt-4 border-t border-gray-500 pt-2">
        <p
          className="text-black text-sm underline"
          onClick={() => setShowHelp(true)}
        >
          Quên mật khẩu hay cần trợ giúp?
        </p>
      </div>
      <p className="text-xs text-gray-500 mt-1">Copyright© 2025 by Techgel</p>
      <p className="absolute bottom-2 right-4 text-[11px] text-gray-400">
        version 25.03.22
      </p>
    </div>
  );
}
