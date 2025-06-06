import { useState } from 'react';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { employeeTabs, EmployeeTabKey, TabToDTOMap } from '../configs/EmployeeTabs';
import { useGetEmployeesQuery } from '../api/employeeListApi';
import { ColumnDef } from '@tanstack/react-table';
import { EmployeeDTO } from '../DTOs/EmployeeDTO';
import { employeeColumnMap } from '../tables/types/tableTypes';
import { useNavigate } from 'react-router';
import { FaPlus } from 'react-icons/fa';
import { BasicEmployeeInfo, employeeBasicListColumns } from '../tables/columns/basicInfoColumns';
import { ListTable } from '../../../public/Table/listTable';
import { ItemParams } from 'react-contexify';

export function EmployeeListPage() {
  const [currentTab, setCurrentTab] = useState<EmployeeTabKey>('personalInfo');
  const { data: employees = [], isLoading, isError } = useGetEmployeesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  if (isError) return <p>Error loading employees</p>;

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as EmployeeTabKey);
  };

  const handleEdit = ({ props }: ItemParams) => {
    navigate(`/main/employees/${props.id}/edit`);
  };

  function renderNestedTable<T extends EmployeeTabKey>(
    tabKey: T,
    employees: EmployeeDTO[],
    title: string
  ) {
    const nestedData = employees.map((e) => e[tabKey]) as TabToDTOMap[T][];
    const columns = employeeColumnMap[tabKey] as ColumnDef<TabToDTOMap[T], any>[];

    const basicData = employees.map((e) => ({
      id: e.id,
      mainId: e.mainId,
      firstName: e.firstName,
      lastName: e.lastName,
      middleName: e.middleName,
      avatar: e.avatar,
    }));

    const contextMenu = [
      {label: 'Cập nhật thông tin', handle: handleEdit},
    ]

    return (
      <ListTable<BasicEmployeeInfo, TabToDTOMap[T]>
        title={`Bảng: ${title}`}
        slug={`employees`}
        contextMenu={contextMenu}
        basicData={basicData}
        basicListColumns={employeeBasicListColumns}
        nestedData={nestedData}
        nestedColumns={columns}
      />
    );
  }


  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách Nhân viên</h2>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => navigate('/main/employees/add')}
        >
          <FaPlus /> Thêm đơn vị
        </button>
      </div>

      <SwitchBar tabs={employeeTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      {renderNestedTable(
        currentTab,
        employees,
        employeeTabs.find((tab) => tab.name === currentTab)?.label || 'N/A'
      )}
    </div>
  );
}