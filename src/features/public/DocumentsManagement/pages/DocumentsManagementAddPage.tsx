import { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { Form, Formik } from 'formik';
import InputField from '../../../../components/Form/InputField';
import { ToastContainer, toast } from 'react-toastify';
import { useCreateDocumentMetadataMutation, useCreateDocumentMutation } from '../api/documentApi';
import { CreateDocumentDTO } from '../DTOs/DocumentDTO';
import { DocumentTabKey, documentTabs } from '../configs/documentTabs';
import GeneralDocumentInfoSection from '../forms/sections/GeneralDocumentInfoSection';
import LegalDocumentInfoSection from '../forms/sections/LegalDocumentInfoSection';
import SecurityInfoSection from '../forms/sections/SecurityDocumentInfoSection';
import AdditionalInfoSection from '../forms/sections/AdditionalInfoSection';
import { documentFormInitialValues } from '../DTOs/documentFormInitialValues';

export function DocumentsManagementAddPage() {
  const [currentTab, setCurrentTab] = useState<DocumentTabKey>('generalDocumentInfo');
  const navigate = useNavigate();

  const [createDocumentMetadata] = useCreateDocumentMetadataMutation();
  const [createDocument, { isLoading }] = useCreateDocumentMutation();

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as DocumentTabKey);
  };

  const uploadFileToVPS = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:3000/upload-file', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
        if(result.success) return `https://files.quan-ng.uk/upload/${file.name}`;
        return "";
    };

  const handleSubmit = async (formData: CreateDocumentDTO) => {
    // let promise;
    // if('file' in formData.generalDocumentInfo && formData.generalDocumentInfo.file){
    //     promise = createDocument(formData).unwrap();
    // }else promise = createDocumentMetadata(formData).unwrap();

    // toast.promise(promise, {
    //   pending: 'Đang tạo tài liệu...',
    //   success: {
    //     render() {
    //       return 'Tạo tài liệu thành công!';
    //     },
    //     onClose: () => {
    //       navigate('/main/documents/');
    //     },
    //   },
    //   error: 'Tạo tài liệu thất bại. Vui lòng thử lại!',
    // });

    // try {
    //   const result = await promise;
    //   console.log("Document created:", result);
    // } catch (err) {
    //   console.error("Failed to create document:", err);
    // }

    try {
      let promise;
      console.log(formData);
      if ('file' in formData.generalDocumentInfo && formData.generalDocumentInfo.file) {
        const fileUrl = await uploadFileToVPS(formData.generalDocumentInfo.file);
        formData.generalDocumentInfo.url = fileUrl;
        promise = createDocument(formData).unwrap();
        console.log('hi');
      }else{
        promise = createDocumentMetadata(formData).unwrap();
      }

      toast.promise(promise, {
        pending: 'Đang tạo tài liệu...',
        success: {
          render() {
            return 'Tạo tài liệu thành công!';
          },
          onClose: () => navigate('/main/documents/'),
        },
        error: 'Tạo tài liệu thất bại. Vui lòng thử lại!',
      });

      await promise;
    } catch (err) {
      console.error("Failed to create document:", err);
    }
  }

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

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Thêm tài liệu mới</h2>
        <button
          className="btn btn-info flex items-center gap-2"
          onClick={() => navigate('/main/documents/')}
        >
          <FaMinus /> Ngừng thêm tài liệu
        </button>
      </div>

      <SwitchBar tabs={documentTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      <Formik<CreateDocumentDTO> 
        initialValues={documentFormInitialValues} 
        // validationSchema={documentFormValidationSchema}
        onSubmit={handleSubmit}>
        {() => (
          <Form className="space-y-6"
            onKeyDown={(e) => {
              if (
                e.key === 'Enter' &&
                (e.target as HTMLElement).closest('.react-tags')
              ) {
                e.preventDefault();
              }
            }}
            >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              <InputField name="mainId" label="Mã tài liệu" required disabled/>
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
