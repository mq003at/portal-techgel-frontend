import { Form, Formik } from 'formik';
import { EmployeeDTO, UpdateEmployeeDTO } from '../DTOs/EmployeeDTO';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from '../api/employeeListApi';
import { EmployeeTabKey, employeeTabs } from '../configs/EmployeeTabs';
import CareerPathInfoSection from '../forms/sections/CareerPathInfoSection';
import CompanyInfoSection from '../forms/sections/CompanyInfoSection';
import EmergencyContactInfoSection from '../forms/sections/EmergencyContactInfoSection';
import InsuranceInfoSection from '../forms/sections/InsuranceInfoSection';
import PersonalInfoSection from '../forms/sections/PersonalInfoSection';
import RoleInfoSection from '../forms/sections/RoleInfoSection';
import ScheduleInfoSection from '../forms/sections/ScheduleInfoSection';
import TaxInfoSection from '../forms/sections/TaxInfoSection';
import InputField from '../../../../components/form/InputField';

export function EmployeeListEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<EmployeeTabKey>('personalInfo');

  const { data: employee, isLoading } = useGetEmployeeByIdQuery(id ?? '');
  const [updateEmployee] = useUpdateEmployeeMutation();

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as EmployeeTabKey);
  };

  const handleUpdate = (values: UpdateEmployeeDTO) => {
    if (!id) return;
    updateEmployee({ id, data: values });
  };

  const renderSection = (tab: EmployeeTabKey) => {
    switch (tab) {
      case 'personalInfo':
        return <PersonalInfoSection />;
      case 'companyInfo':
        return <CompanyInfoSection />;
      case 'careerPathInfo':
        return <CareerPathInfoSection />;
      case 'taxInfo':
        return <TaxInfoSection />;
      case 'insuranceInfo':
        return <InsuranceInfoSection />;
      case 'emergencyContactInfo':
        return <EmergencyContactInfoSection />;
      case 'scheduleInfo':
        return <ScheduleInfoSection />;
      case 'roleInfo':
        return <RoleInfoSection />;
      default:
        return null;
    }
  };

  if (isLoading || !employee) {
    return <div className="p-6">Đang tải dữ liệu nhân viên...</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Chỉnh sửa nhân viên: {employee.mainId}</h2>
        <button
          className="btn btn-info flex items-center gap-2"
          onClick={() => navigate('/main/employees/')}
        >
          <FaArrowLeft /> Quay lại danh sách
        </button>
      </div>

      <SwitchBar tabs={employeeTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      <Formik<EmployeeDTO> initialValues={employee} onSubmit={handleUpdate} enableReinitialize>
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="mainId" label="Mã nhân viên" required />
            <InputField name="lastName" label="Họ" required />
            <InputField name="middleName" label="Tên đệm" />
            <InputField name="firstName" label="Tên" required />
          </div>
          {renderSection(currentTab)}
          <div className="pt-4 text-right">
            <button type="submit" className="btn btn-primary">
              Lưu thay đổi
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
