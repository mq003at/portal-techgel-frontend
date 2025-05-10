import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useGetEmployeesQuery } from '../../../restricted/EmployeeList/api/employeeListApi';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { SignatureTabKey, signatureTabs } from '../configs/SignatureTabs';
import SignatureManagerESignaturePage from './SignatureManagerESignaturePage';
import SignatureManagerEmailSignaturePage from './SignatureManagerEmailSignaturePage';
import SignatureManagerImageSignaturePage from './SignatureManagerImageSignaturePage';

export function SignatureManagerPage() {
  const [currentTab, setCurrentTab] = useState<SignatureTabKey>('eSignature');
  const { data: signatureInfo = [] } = useGetEmployeesQuery();

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as SignatureTabKey);
  };

  const handleAddSignature = () => {};

  const renderServiceArea = () => {
    switch (currentTab) {
      case 'eSignature':
        return <SignatureManagerESignaturePage />;
      case 'imageSignature':
        return <SignatureManagerImageSignaturePage />;
      case 'emailSignature':
        return <SignatureManagerEmailSignaturePage />;
      default:
        return <SignatureManagerESignaturePage />;
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Quản Lỹ Chữ Ký</h2>
        {/* <button className="btn btn-primary flex items-center gap-2" onClick={handleAddSignature}>
          <FaPlus /> Thêm chữ ký
        </button> */}
      </div>

      <SwitchBar tabs={signatureTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      {renderServiceArea()}
    </div>
  );
}
