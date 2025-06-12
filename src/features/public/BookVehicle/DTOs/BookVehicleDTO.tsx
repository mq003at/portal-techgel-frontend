import { BaseReadDTO } from "../../../../types/DTOs/BaseDTO";
import { BookVehicleStatus } from "../types/BookVehicleEnum";

export interface BookVehicleDTO extends BaseReadDTO {
    startDate: Date, // ngày bắt đầu 
    endDate: Date, // ngày kết thúc
    userCount: number, // số người sử dụng,
    departureLocation: string, // nơi khởi hành
    arrivalLocation: string, // nơi đến
    registrantUserId: number, // id người đăng ký
    registrantUserName: string, // tên người đăng ký
    userId: number, // id người sử dụng
    userName: string, // tên người sử dụng
    driverId: number, // id người lái
    driverName: string, // tên người lái
    content: string, // nội dung
    status: BookVehicleStatus, // trạng thái
    vehicle: VehicleDTO, // xe
}

export interface CreateBookVehicleDTO extends BaseReadDTO {
    startDate: Date,
    endDate: Date, 
    userCount: number, 
    departureLocation: string, 
    arrivalLocation: string, 
    registrantUserId: number, 
    registrantUserName: string, 
    userId: number,
    userName: string,
    driverId: number,
    driverName: string, 
    content: string,
    status: BookVehicleStatus, 
    vehicle: VehicleDTO,
}

export interface UpdateBookVehicleDTO extends BaseReadDTO {
    startDate: Date,
    endDate: Date, 
    userCount: number, 
    departureLocation: string, 
    arrivalLocation: string, 
    registrantUserId: number, 
    registrantUserName: string, 
    userId: number,
    userName: string,
    driverId: number,
    driverName: string, 
    content: string,
    status: BookVehicleStatus, 
    vehicle: VehicleDTO,
}

export interface VehicleDTO extends BaseReadDTO{
    name: string, // tên xe
    licensePlate: string, // biển số xe
    seats: number, // số ghế
    location: string, // vị trí
}