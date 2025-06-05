import { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { EmployeeTabKey, employeeTabs } from '../configs/EmployeeTabs';
import { employeeFormInitialValues } from '../DTOs/employeeFormInitialValues';
import { CreateEmployeeDTO } from '../DTOs/EmployeeDTO';
import { Form, Formik } from 'formik';
import PersonalInfoSection from '../forms/sections/PersonalInfoSection';
import CareerPathInfoSection from '../forms/sections/CareerPathInfoSection';
import CompanyInfoSection from '../forms/sections/CompanyInfoSection';
import EmergencyContactInfoSection from '../forms/sections/EmergencyContactInfoSection';
import InsuranceInfoSection from '../forms/sections/InsuranceInfoSection';
import RoleInfoSection from '../forms/sections/RoleInfoSection';
import ScheduleInfoSection from '../forms/sections/ScheduleInfoSection';
import TaxInfoSection from '../forms/sections/TaxInfoSection';
import InputField from '../../../../components/Form/InputField';
import { useCreateEmployeeMutation } from '../api/employeeListApi';
import { ToastContainer, toast } from 'react-toastify';

export function EmployeeListAddPage() {
  const [currentTab, setCurrentTab] = useState<EmployeeTabKey>('personalInfo');
  const navigate = useNavigate();

  // const [createEmployee, { isLoading, isError, error, isSuccess }] = useCreateEmployeeMutation();

  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as EmployeeTabKey);
  };

  const handleSubmit = async (formData: CreateEmployeeDTO) => {
    const promise = createEmployee(formData).unwrap();

    toast.promise(promise, {
      pending: 'Đang tạo nhân viên...',
      success: {
        render() {
          return 'Tạo nhân viên thành công!';
        },
        onClose: () => {
          navigate('/main/employees/');
        },
      },
      error: 'Tạo nhân viên thất bại. Vui lòng thử lại!',
    });

    try {
      const result = await promise;
      console.log('Employee created:', result);
    } catch (err) {
      console.error('Failed to create employee:', err);
    }
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

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Thêm Nhân viên mới</h2>
        <button
          className="btn btn-info flex items-center gap-2"
          onClick={() => navigate('/main/employees/')}
        >
          <FaMinus /> Ngừng thêm Nhân viên
        </button>
      </div>

      <SwitchBar tabs={employeeTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      <Formik<CreateEmployeeDTO>
        initialValues={employeeFormInitialValues}
        // validationSchema={employeeFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField name="mainId" label="Mã nhân viên" required disabled />
              <InputField name="lastName" label="Họ" required />
              <InputField name="middleName" label="Tên đệm" />
              <InputField name="firstName" label="Tên" required />
            </div>
            {renderSection(currentTab)}
            <div className="pt-4 text-right">
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? 'Đang lưu...' : 'Lưu thông tin'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
