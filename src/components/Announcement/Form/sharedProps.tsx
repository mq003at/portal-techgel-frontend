import { InputFieldProps } from "../../Form/InputField";

export const announcementInputFields: InputFieldProps[] = [
  { label: "Tên thông báo", name: "name", type: "text", required: true },
  { label: "Người ban hành", name: "issuer", type: "text", required: true },
  { label: "Ngày hết hạn", name: "expiredAt", type: "date" },
];

export interface AnnouncementCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}
