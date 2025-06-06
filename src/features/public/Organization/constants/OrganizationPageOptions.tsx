import { OrganizationStatus, OrganizationStatusEnum } from "../configs/OrganizationModelOptions";

// Define a structure that maps each status directly to its label and color
export const OrganizationStatusOptions: Record<OrganizationStatus, { color: string; label: string }> = {
  [OrganizationStatusEnum.ACTIVE]: { color: 'success', label: 'Hoạt động' },
  [OrganizationStatusEnum.INACTIVE]: { color: 'neutral', label: 'Không hoạt động' },
  [OrganizationStatusEnum.ARCHIVED]: { color: 'warning', label: 'Lưu trữ' },
};
