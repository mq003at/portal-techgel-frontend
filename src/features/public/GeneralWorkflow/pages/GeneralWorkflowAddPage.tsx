import { useState } from "react";
import { GeneralWorkflowTabKey, generalWorkflowTabs } from "../config/GeneralWorkflowTabs";
import { useNavigate } from "react-router";
import { useCreateGeneralWorkflowMutation } from "../api/GeneralWorkflowApi";
import { CreateGeneralWorkflowDTO } from "../DTOs/GeneralWorkflowDTO";
import { FaMinus } from "react-icons/fa";
import { SwitchBar } from "../../../../components/switchBar.tsx/SwitchBar";
import { Formik, Form } from "formik";
import InputField from "../../../../components/Form/InputField";
import { toast, ToastContainer } from "react-toastify";
import { generalWorkflowFormInitialValues } from "../DTOs/generalWorkflowFormInitialValues";
import GeneralInfoSection from "../forms/sections/GeneralInfoSection";
import { ApprovalNodesSection } from "../forms/sections/ApprovalNodesSection";

export function GeneralWorkflowAddPage() {
    const [currentTab, setCurrentTab] = useState<GeneralWorkflowTabKey>('generalInfo');
    const navigate = useNavigate();


    const [createGeneralWorkflow, { isLoading }] = useCreateGeneralWorkflowMutation();

    const handleTabChange = (tabName: string) => {
        setCurrentTab(tabName as GeneralWorkflowTabKey);
    }

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

    const handleSubmit = async (formData: CreateGeneralWorkflowDTO) => {
        try {
            const promise = (async () => {
                for (const node of formData.approvalNodes) {
                    const files: File[] = Array.isArray(node.rawFiles) ? node.rawFiles : [];
                    const urls: string[] = [];

                    for (const file of files) {
                    const url = await uploadFileToVPS(file);
                    urls.push(url);
                    }

                    node.files = urls;
                }

                return createGeneralWorkflow(formData).unwrap();
            })();

            toast.promise(promise, {
                pending: "Đang tạo quy trình...",
                success: {
                    render() {
                    return "Tạo quy trình thành công!";
                    },
                    onClose: () => {
                    navigate("/main/general-workflow/");
                    },
                },
                error: "Tạo quy trình thất bại. Vui lòng thử lại!",
            });

            await promise;
        } catch (err) {
            console.error("Upload or create workflow failed", err);
            toast.error("Lỗi khi upload file hoặc tạo quy trình!");
        }
        };


    const renderSection = (tab: GeneralWorkflowTabKey) => {
        switch (tab) {
            case 'generalInfo':
                return <GeneralInfoSection />;
            default:
                return null;
        }
    };

    return (
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Thêm quy trình</h2>
                <button className="btn btn-info flex items-center gap-2" onClick={() => navigate('/main/general-workflow/')}>
                    <FaMinus /> Ngừng thêm quy trình
                </button>
            </div>

            <SwitchBar tabs={generalWorkflowTabs} onTabChange={handleTabChange} initialTab={currentTab} />

            <Formik<CreateGeneralWorkflowDTO> 
                initialValues={generalWorkflowFormInitialValues}
                // validationSchema={generalWorkflowFormValidationSchema}
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
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <InputField name="mainId" label="Mã quy trình" required disabled/>
                    </div>
                    {renderSection(currentTab)}
                    <ApprovalNodesSection />
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
    )
}