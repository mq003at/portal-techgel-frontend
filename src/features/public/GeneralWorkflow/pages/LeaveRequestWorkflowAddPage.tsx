import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaMinus } from 'react-icons/fa';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { Formik, Form } from 'formik';
import InputField from '../../../../components/Form/InputField';
import { toast, ToastContainer } from 'react-toastify';
import { leaveRequestWorkflowFormInitialValues } from '../DTOs/leaveRequestWorkflowFormInitialValues';
import {
    LeaveRequestWorkflowTabKey,
    leaveRequestWorkflowTabs,
} from '../config/GeneralWorkflowTabs';
import { useCreateLeaveRequestWorkflowMutation } from '../api/LeaveRequestWorkflowApi';
import { CreateLeaveRequestWorkflowDTO } from '../DTOs/LeaveRequestWorkflowDTO';
import { useAppSelector } from '../../../../hooks/reduxHooks';

export function LeaveRequestWorkflowAddPage() {
    const [currentTab, setCurrentTab] = useState<LeaveRequestWorkflowTabKey>('');
    const { user } = useAppSelector((state) => state.auth);
    const { employees } = useAppSelector((state) => state.phoneBook);
    const navigate = useNavigate();

    const [createLeaveRequestWorkflow, { isLoading }] = useCreateLeaveRequestWorkflowMutation();

    const handleTabChange = (tabName: string) => {
        setCurrentTab(tabName as LeaveRequestWorkflowTabKey);
    };

    const handleSubmit = async (formData: CreateLeaveRequestWorkflowDTO) => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0'); 
        const month = String(now.getMonth() + 1).padStart(2, '0');
        
        formData.mainId = `AL-${day}.${month}/${user?.mainId.replace(/^TG/, "")}`
        formData.name = "Đơn xin nghỉ phép"
        formData.description = `Đơn xin nghỉ phép ${day}.${month}`
        const promise = createLeaveRequestWorkflow(formData).unwrap();

        toast.promise(promise, {
            pending: 'Đang gửi yêu cầu nghỉ phép...',
            success: {
                render() {
                    return 'Gửi yêu cầu thành công!';
                },
                onClose: () => {
                    navigate('/main/leave-request');
                },
            },
            error: {
                render({ data }) {
                    const err = data as { message?: string };
                    return err?.message || 'Gửi yêu cầu thất bại!';
                }
            },
        });

        try {
            await promise;
        } catch (err) {
            console.error('Submit failed:', err);
            toast.error('Lỗi không xác định khi gửi yêu cầu.');
        }
    };


    const renderSection = (tab: LeaveRequestWorkflowTabKey) => {
        switch (tab) {
            default:
                return null;
        }
    };

    return (
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Thêm quy trình</h2>
                <button
                    className="btn btn-info flex items-center gap-2"
                    onClick={() => navigate('/main/leave-request/')}
                >
                    <FaMinus /> Ngừng thêm quy trình
                </button>
            </div>

            <SwitchBar
                tabs={leaveRequestWorkflowTabs}
                onTabChange={handleTabChange}
                initialTab={currentTab}
            />

            <Formik<CreateLeaveRequestWorkflowDTO>
                initialValues={leaveRequestWorkflowFormInitialValues(user ? user.id : 0)}
                // validationSchema={generalWorkflowFormValidationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form
                        className="space-y-6"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && (e.target as HTMLElement).closest('.react-tags')) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                            <InputField name="mainId" label="Mã quy trình" required disabled />
                            <InputField name="employeeId" label="Mã nhân viên" required disabled />
                            <InputField name="startDate" label="Từ ngày" type="datetime" required />
                            <InputField name="endDate" label="Đến ngày" type="datetime" required />
                            <InputField name="reason" label="Lý do nghỉ phép" type="textarea" required />
                            <InputField
                                name="workAssignedToId"
                                label="Công việc được giao cho"
                                type="select-input"
                                placeholder=""
                                options={employees?.map((emp) => ({
                                    label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName} ${user?.id === emp.id ? '(Làm việc online)' : ''}`,
                                    value: emp.id,
                                }))}
                                required
                            />
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
