import { useEffect, useState } from 'react';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { employeeTabs, EmployeeTabKey, TabToDTOMap } from '../configs/EmployeeTabs';
import { useGetEmployeesQuery } from '../api/employeeListApi';
import { ColumnDef } from '@tanstack/react-table';
import { EmployeeDTO } from '../DTOs/EmployeeDTO';
import { EmployeeListTable } from '../tables/employeeListTable';
import { employeeColumnMap } from '../tables/types/tableTypes';
import { useNavigate } from 'react-router';
import { FaPlus } from 'react-icons/fa';

export function EmployeeListPage() {
  const [currentTab, setCurrentTab] = useState<EmployeeTabKey>('personalInfo');
  const { data: employees = [] } = useGetEmployeesQuery();

  const navigate = useNavigate();

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as EmployeeTabKey);
  };

  useEffect(() => {
    console.log('emp', employees);
  }, [employees]);

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

  return (
    <EmployeeListTable<TabToDTOMap[T]>
      title={`Bảng: ${title}`}
      basicData={basicData}
      nestedData={nestedData}
      columns={columns}
    />
  );
}
