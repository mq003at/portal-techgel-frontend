import { useNavigate } from "react-router";

export default function LoginBox() {
  const navigate = useNavigate();

  return (
    <div className="card w-[400px] p-6 text-center  text-black shadow-lg">
      <p className="mt-2">HỆ THỐNG ERP CỦA TECHGEL</p>
      <p className="mt-4 text-sm  text-black">
        Xin vui lòng đăng nhập bằng Tài Khoản và Mật Khẩu được cung cấp.
      </p>

      <form className="mt-6 space-y-4">
        <div className="form-group">
          <label className="input input-bordered flex items-center gap-2">
            <i className="icon-user"></i>
            <input
              type="text"
              placeholder="Tài khoản"
              className=" bg-white placeholder-gray-600 text-black"
            />
          </label>
        </div>

        <div className="form-group">
          <label className="input input-bordered flex items-center gap-2">
            <i className="icon-lock"></i>
            <input
              type="password"
              placeholder="Mật khẩu"
              className=" bg-white placeholder-gray-600 text-black"
            />
          </label>
        </div>

        <div className="flex justify-center mt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox" />
            Nhớ tên tài khoản
          </label>
        </div>

        <button
          className="btn bg-white text-black w-full mt-4 card-actions content-center"
          onClick={() => navigate("/main/announcement")}
        >
          <i className="icon-check"></i> Đăng nhập
        </button>
      </form>

      <div className="mt-4 border-t border-gray-500 pt-2">
        <p className="text-black text-sm underline">
          Thông tin Liên hệ khi cần trợ giúp
        </p>
      </div>
    </div>
  );
}
