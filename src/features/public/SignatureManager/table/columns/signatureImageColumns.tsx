import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { LinkCell } from "../../../Table/components/LinkCell";
import { SignatureDTO } from "../../DTOs/SignatureDTO";

export const signatureImageColumns: TableColumnDef<SignatureDTO>[] = [
    {
        accessorKey: 'mainId',
        id: 'mainId',
        header: 'Mã chữ ký',
    },
    {
        accessorKey: 'employeeId',
        id: 'employeeId',
        header: 'Mã nhân viên',
    },
    {
        accessorKey: 'fileName',
        id: 'fileName',
        header: 'Tên file',
    },
    {
        accessorKey: 'fileUrl',
        id: 'fileUrl',
        header: 'Đường dẫn file',
        cell: LinkCell,
    },
];
