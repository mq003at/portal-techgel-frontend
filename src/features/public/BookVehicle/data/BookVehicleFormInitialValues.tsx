import { CreateBookVehicleDTO } from "../DTOs/BookVehicleDTO";
import { BookVehicleStatusEnum } from "../types/BookVehicleEnum";

export const bookVehicleFormInitialValues: CreateBookVehicleDTO = {
    id: 0,
    mainId: '',
    createdAt: '',
    updatedAt: '',
    startDate: new Date(),
    endDate: new Date(), 
    userCount: 0, 
    departureLocation: '', 
    arrivalLocation: '', 
    registrantUserId: 0, 
    registrantUserName: '', 
    userId: 0,
    userName: '',
    driverId: 0,
    driverName: '', 
    content: '',
    status: BookVehicleStatusEnum.REGISTERING, 
    vehicle: {
        id: 0,
        mainId: '',
        createdAt: '',
        updatedAt: '',
        name: '',
        licensePlate: '',
        seats: 0,
        location: ''
    },
}