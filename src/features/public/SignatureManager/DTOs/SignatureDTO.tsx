import { BaseDTO } from "../../../../types/DTOs/BaseDTO";

export interface SignatureDTO extends BaseDTO{
    employeeId: string;
    fileName: string;
    fileUrl: string;
}

export interface CreateSignatureDTO{
    employeeId: string;
    file: File;
    fileName: string;
}

export interface UpdateSignatureDTO{
    employeeId: string;
    file: File;
    fileName: string;
}