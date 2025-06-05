import React, { useState } from 'react';
import { Attachment } from '../../../../types/DocumentTypes';
import { base64ToDocx } from '../../../../utils/base64ToDocx';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface LeaveRequestWorkflowDescriptionPageProps {
    name: string;
    employeeName: string;
    reason: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    employeeAnnualLeaveTotalDays: number;
    finalEmployeeAnnualLeaveTotalDays: number;
    leaveAprrovalCategory: string;
    workAssignedToId: number;
    workAssignedToName: string;
    workAssignedToPosition: string;
    workAssignedToPhone: string;
    workAssignedToEmail: string;
    workAssignedToHomeAdress: string;
    attachments: Attachment[];
}

export default function LeaveRequestWorkflowDescriptionPage({
    name,
    employeeName,
    reason,
    startDate,
    endDate,
    totalDays,
    employeeAnnualLeaveTotalDays,
    finalEmployeeAnnualLeaveTotalDays,
    leaveAprrovalCategory,
    workAssignedToId,
    workAssignedToName,
    workAssignedToPosition,
    workAssignedToPhone,
    workAssignedToEmail,
    workAssignedToHomeAdress,
    attachments,
}: LeaveRequestWorkflowDescriptionPageProps) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="mb-6">
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="flex items-center gap-2 mb-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
                {collapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                {collapsed ? 'Hiển thị thông tin đơn nghỉ phép' : 'Ẩn thông tin đơn nghỉ phép'}
            </button>


            {!collapsed && (
                <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Thông tin đơn nghỉ</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><strong>Tên:</strong> {name}</div>
                            <div><strong>Người xin nghỉ:</strong> {employeeName}</div>
                            <div><strong>Lý do:</strong> {reason}</div>
                            <div><strong>Ngày bắt đầu:</strong> {startDate}</div>
                            <div><strong>Ngày kết thúc:</strong> {endDate}</div>
                            <div><strong>Tổng số ngày nghỉ:</strong> {totalDays}</div>
                            <div><strong>Ngày phép hiện tại:</strong> {employeeAnnualLeaveTotalDays}</div>
                            <div><strong>Ngày phép còn lại:</strong> {finalEmployeeAnnualLeaveTotalDays}</div>
                            <div><strong>Loại phê duyệt:</strong> {leaveAprrovalCategory}</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">Người được giao việc</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><strong>ID:</strong> {workAssignedToId}</div>
                            <div><strong>Tên:</strong> {workAssignedToName}</div>
                            <div><strong>Chức vụ:</strong> {workAssignedToPosition}</div>
                            <div><strong>Số điện thoại:</strong> {workAssignedToPhone}</div>
                            <div><strong>Email:</strong> {workAssignedToEmail}</div>
                            <div><strong>Địa chỉ:</strong> {workAssignedToHomeAdress}</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">File đính kèm</h3>
                        {attachments.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-2">
                                {attachments.map((attachment, index) => (
                                    <li key={index}>
                                        <a
                                            href={base64ToDocx(attachment.fileContent)}
                                            download={attachment.fileName}
                                            className="text-blue-600 hover:underline"
                                        >
                                            📄 {attachment.fileName}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 italic">Không có file đính kèm</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
