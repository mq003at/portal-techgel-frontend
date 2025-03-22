import ImageWrapper from "../Wrapper/ImageWrapper";

interface NeedHelpLoginPopoverProps {
  onClose: () => void;
}

export default function NeedHelpLoginPopover({
  onClose,
}: NeedHelpLoginPopoverProps) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-60 z-50 flex items-center justify-center rounded-xl">
      <div
        className="bg-white rounded-xl  w-full max-w-lg mx-6 p-12"
        style={{ padding: "48px" }}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 btn btn-sm btn-circle mr-6"
          style={{ marginRight: "12px", marginTop: "12px" }}
        >
          ✕
        </button>
        <div className="items-center" style={{ justifyItems: "center" }}>
          <ImageWrapper
            src={"assets/logo-main-600-150-transparent.png"}
            alt="Logo-Techgel"
            title="Logo Techgel"
            height={60}
            width={250}
          />
        </div>

        <div className="relative mb-4"></div>

        <div>
          <h2 className="text-md font-semibold mb-2">Quên Mật khẩu</h2>
          <p className="mt-4 text-sm text-black pb-5">
            Xin vui lòng nhập Mã Nhân Viên và Email Công Ty để lấy lại mật khẩu
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                className="input input-bordered w-full focus-within:outline focus-within:border-red-500 focus-within:outline-red-500"
                placeholder="Mã Nhân Viên"
              />
            </div>

            <div>
              <input
                type="email"
                className="input input-bordered w-full focus-within:outline focus-within:border-red-500 focus-within:outline-red-500"
                placeholder="Email Công Ty"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              onClick={(e) => e.preventDefault()}
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
