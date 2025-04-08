import { FaCog } from 'react-icons/fa';
import { RiResetLeftFill } from 'react-icons/ri';

interface FunctionalityBarProps {
  resetButtonFunction: () => void;
}

export default function FunctionalityBar({ resetButtonFunction }: FunctionalityBarProps) {
  return (
    <div className="flex justify-between items-center my-4">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên, email, số điện thoại..."
        className="input input-bordered w-96"
      />
      <div className="flex gap-2">
        <select className="select select-bordered">
          <option>Tất cả</option>
        </select>
        <select className="select select-bordered">
          <option>-- Không chọn --</option>
        </select>
        <button className="btn">
          <FaCog />
        </button>
        <button
          className="btn btn-outline"
          onClick={() => {
            resetButtonFunction();
          }}
        >
          <RiResetLeftFill className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
