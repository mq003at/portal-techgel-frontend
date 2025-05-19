import { BaseDTO } from "../../../../types/DTOs/BaseDTO";

export interface HRStorageItemDTO extends BaseDTO {
    // Basic information
    name: string;
    unit: string;
    quantity: number;
    description?: string;

    // Storage Information
    sku: string;
}