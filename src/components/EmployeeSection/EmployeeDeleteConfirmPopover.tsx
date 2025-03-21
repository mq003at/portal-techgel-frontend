interface EmployeeDeleteConfirmPopoverProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const EmployeeDeleteConfirmPopover: React.FC<
  EmployeeDeleteConfirmPopoverProps
> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center self-center justify-self-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-semibold text-red-600">
          Cảnh báo: Hành động không thể hoàn tác!
        </h2>
        <p className="mt-2 text-gray-700">
          Bạn có chắc chắn muốn xóa nhân viên này? Toàn bộ hồ sơ liên quan tới
          nhân viên sẽ bị gỡ bỏ khỏi hệ thống.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            type="button"
            className="btn btn-error text-white"
            onClick={onConfirm}
          >
            Xác nhận xóa
          </button>
          <button type="button" className="btn btn-outline" onClick={onCancel}>
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDeleteConfirmPopover;
