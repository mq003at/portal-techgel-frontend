
interface NeedHelpLoginPopoverProps {
  onClose: () => void;
}

export default function NeedHelpLoginPopover({
  onClose,
}: NeedHelpLoginPopoverProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 btn btn-sm btn-circle"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Login Help</h2>

        {/* Section 1: IT Section Information */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">IT Section Information</h3>
          <p>
            <span className="font-medium">Name:</span> Quan Nguyen
          </p>
          <p>
            <span className="font-medium">Phone:</span> 123456789
          </p>
        </div>

        {/* Section 2: Forgot Password */}
        <div>
          <h3 className="text-md font-semibold mb-2">Forgot Password?</h3>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Company Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your company email"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              onClick={(e) => e.preventDefault()} // Prevent for now
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
