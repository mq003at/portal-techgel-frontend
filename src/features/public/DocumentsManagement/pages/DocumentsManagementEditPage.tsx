import { Form, Formik } from 'formik';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import InputField from '../../../../components/Form/InputField';
import { toast, ToastContainer } from 'react-toastify';
import { DocumentTabKey, documentTabs } from '../configs/documentTabs';
import { useGetDocumentByIdQuery, useUpdateDocumentMutation } from '../api/documentApi';
import { DocumentDTO, UpdateDocumentDTO } from '../DTOs/DocumentDTO';
import GeneralDocumentInfoSection from '../forms/sections/GeneralDocumentInfoSection';
import LegalDocumentInfoSection from '../forms/sections/LegalDocumentInfoSection';
import SecurityInfoSection from '../forms/sections/SecurityDocumentInfoSection';
import AdditionalInfoSection from '../forms/sections/AdditionalInfoSection';

export function DocumentsManagementEditPage() {
  const { id = '' } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<DocumentTabKey>('generalDocumentInfo');

  const { data: document, isLoading } = useGetDocumentByIdQuery(id ?? '');
  const [updateDocument, { isLoading: isUpdating, isError: isUpdateError, error: updateError, isSuccess: isUpdateSuccess }] = useUpdateDocumentMutation();

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as DocumentTabKey);
  };

  const handleSubmit = async (formData: UpdateDocumentDTO) => {
    const promise = updateDocument({ id: id, data: formData }).unwrap();
    
    toast.promise(promise, {
      pending: 'Đang cập nhật tài liệu...',
      success: {
        render() {
          return 'Cập nhật thành công thành công!';
        },
        onClose: () => {
          navigate('/main/documents/');
        },
      },
      error: 'Cập nhật tài liệu thất bại. Vui lòng thử lại!',
    });

    try {
      const result = await promise;
      console.log("Document updated:", result);
    } catch (err) {
      console.error("Failed to update document:", err);
    }
  };

  const renderSection = (tab: DocumentTabKey) => {
    switch (tab) {
        case 'generalDocumentInfo':
            return <GeneralDocumentInfoSection />;
        case 'legalDocumentInfo':
            return <LegalDocumentInfoSection />;
        case 'securityInfo':
            return <SecurityInfoSection />;
        case 'additionalInfo':
            return <AdditionalInfoSection />;
        default:
            return null;
    }
  };

  if (isLoading || !document) {
    return <div className="p-6">Đang tải dữ liệu tài liệu...</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Chỉnh sửa tài liệu: {document.mainId}</h2>
        <button
          className="btn btn-info flex items-center gap-2"
          onClick={() => navigate('/main/documents/')}
        >
          <FaArrowLeft /> Quay lại danh sách
        </button>
      </div>

      <SwitchBar tabs={documentTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      <Formik<DocumentDTO> initialValues={document} onSubmit={handleSubmit} enableReinitialize>
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <InputField name="mainId" label="Mã tài liệu" required disabled />
          </div>
          {renderSection(currentTab)}
          <div className="pt-4 text-right">
            <button type="submit" className="btn btn-primary" disabled={isUpdating}>
                {isUpdating ? 'Đang lưu...' : 'Lưu thông tin'}
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
