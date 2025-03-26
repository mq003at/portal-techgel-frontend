import { useEffect, useState } from "react";
import { FaPlus, FaCog } from "react-icons/fa";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import { RiResetLeftFill } from "react-icons/ri";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Employee } from "../types/Models/BaseModels";
import EmployeeAddForm from "../components/EmployeeSection/EmployeeAddForm";
import EmployeeEditForm from "../components/EmployeeSection/EmployeeEditForm";
import { formatDateToDDMMYYYY } from "../components/misc/conversion";
import { EmployeeDTO } from "../DTOs/EmployeeDTO";
import { EmployeeMockData } from "../data/employeeData";
import { employmentStatusOptions } from "../components/EmployeeSection/sharedTypes";

export default function EmployeeListPage() {
  const [employeeData, setEmployeeData] = useState<EmployeeDTO[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeDTO>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);

  const fetchEmployees = async () => {
    // try {
    //   const response = await fetch("https://localhost:7188/api/employees");
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const data: Employee[] = await response.json();
    //   console.log("Employees Data:", data);

    //   const dataDTO = data.map((employee) => new EmployeeDTO(employee));

    //   console.log("EmployeeDTO:", dataDTO);

    //   setEmployeeData(dataDTO);
    // } catch (error) {
    //   console.error("Error fetching employees:", error);
    // }

    const data: Employee[] = EmployeeMockData;
    console.log(data)
    const dataDTO = data.map((employee) => new EmployeeDTO(employee));
    setEmployeeData(dataDTO);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns: ColumnDef<EmployeeDTO, any>[] = [
    { accessorKey: "id", header: "ID", enableSorting: true },
    { accessorKey: "mainID", header: "Mã nhân viên", enableSorting: true },
    {
      accessorKey: "fullName",
      header: "Họ và Tên",
      sortingFn: "alphanumeric",
      cell: ({ row }) => {
        const { lastName, middleName, firstName } = row.original;
        return `${lastName} ${middleName ? middleName + " " : ""}${firstName}`;
      },
    },
    {
      accessorKey: "dateOfBirth",
      header: "Ngày Sinh",
      enableSorting: true,
      cell: ({ getValue }: { getValue: () => string }) => (
        <span>{formatDateToDDMMYYYY(getValue())}</span>
      ),
    },
    {
      accessorKey: "position",
      header: "Vị trí công việc",
      enableSorting: true,
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      enableSorting: true,
      cell: ({ getValue }) => {
        const statusValue = getValue();
        const statusMeta = employmentStatusOptions.find(
          (opt) => opt.value === statusValue
        );
    
        const label = statusMeta?.label || statusValue;
        const color = statusMeta?.color || "neutral";
    
        return (
          <span className={`badge badge-${color}`}>
            {label}
          </span>
        );
      },
    },
    {
      accessorKey: "phoneNumber",
      header: "Số đt cá nhân",
      enableSorting: true,
    },
  ];

  const table = useReactTable({
    data: employeeData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <div className="p-6">

      {isFormOpen && <EmployeeAddForm onClose={() => setIsFormOpen(false)} />}
      {isEditFormOpen && selectedEmployee && (
        <EmployeeEditForm
          onClose={() => setIsEditFormOpen(false)}
          employee={selectedEmployee}
        />
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách Nhân viên</h2>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => setIsFormOpen(true)}
        >
          <FaPlus /> Thêm nhân viên
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center my-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên, email, số điện thoại..."
          className="input input-bordered w-96"
        />
        <div className="flex gap-2">
          <select className="select select-bordered">
            <option>Tất cả</option>
          </select>
          <select className="select select-bordered">
            <option>-- Không chọn --</option>
          </select>
          <button className="btn">
            <FaCog />
          </button>
          <button className="btn" onClick={() => fetchEmployees()}>
            <RiResetLeftFill />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table w-full">
          <thead className="sticky top-0 bg-gray-200 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="cursor-pointer px-4 py-2"
                    onClick={header.column.getToggleSortingHandler()} // ✅ Click to sort
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] || " ⬍"}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedEmployee(row.original);
                  setIsEditFormOpen(true);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
