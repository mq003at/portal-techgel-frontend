import { BaseDTO } from '../../../../types/DTOs/BaseDTO';

enum CompanyStorageStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE',
  FULL = 'FULL',
  EMPTY = 'EMPTY',
  LOCKED = 'LOCKED',
}
export type CompanyStorageStatusType = keyof typeof CompanyStorageStatus;

export interface CompanyStorageDTO extends BaseDTO {
  // <summary>
  // Information of this human resource storage.
  // </summary>
  name: string;
  address: string;

  // Manager information
  managerId: string;
  managerName: string;
  contactNumber: string;

  // Status Information
  capacity: string;
  currentOccupancy: string;
  status: 
}
