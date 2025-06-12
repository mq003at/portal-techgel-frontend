import { BookVehicleStatusEnum } from "../types/BookVehicleEnum";

export const bookVehicleStatusOptions = [
    { value: BookVehicleStatusEnum.REGISTERING, label: 'Đang đăng ký' },
    { value: BookVehicleStatusEnum.REGISTERED, label: 'Đã đăng ký' },
    { value: BookVehicleStatusEnum.RETURNED, label: 'Trả lại' },
    { value: BookVehicleStatusEnum.USED, label: 'Đã sử dụng' },
    { value: BookVehicleStatusEnum.USING, label: 'Đang sử dụng' },
];