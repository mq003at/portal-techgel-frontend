import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { AdditionalInfo } from "../../DTOs/DocumentDTO";

export const additionalInfoColumns: TableColumnDef<AdditionalInfo>[] = [
  {
    accessorKey: 'downloadCount',
    id: 'downloadCount',
    header: 'Lượt tải',
    enableSorting: true,
  },
  {
    accessorKey: 'viewCount',
    id: 'viewCount',
    header: 'Lượt xem',
    enableSorting: true,
  },
  {
    accessorKey: 'editCount',
    id: 'editCount',
    header: 'Lượt chỉnh sửa',
    enableSorting: true,
  },
  {
    accessorKey: 'relatedDocuments',
    id: 'relatedDocuments',
    header: 'Tài liệu liên quan',
    enableSorting: true,
  }
];
