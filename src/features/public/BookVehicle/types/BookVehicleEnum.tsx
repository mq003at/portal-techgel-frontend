export enum BookVehicleStatusEnum {
    REGISTERING = "REGISTERING", // đang đăng ký
    REGISTERED = "REGISTERED", // đã đăng ký
    USED = "USED", // đã sử dụng
    USING = "USING", // đang sử dụng
    RETURNED = "RETURNED", // trả lại
}

export type BookVehicleStatus = keyof typeof BookVehicleStatusEnum;