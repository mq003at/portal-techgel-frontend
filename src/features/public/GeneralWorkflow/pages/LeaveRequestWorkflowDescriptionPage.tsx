import React, { useState } from 'react';
import { Attachment } from '../../../../types/DocumentTypes';
import { base64ToBlobUrl } from '../../../../utils/base64ToBlobUrl';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DayNightLabels, LeaveApprovalCategoryLabels } from '../constants/LeaveRequestWorkflowOptions';
import { DayNightEnum, LeaveAprrovalCategoryEnum } from '../config/LeaveRequestWorkflowTypes';
import { FaDownload, FaEye } from 'react-icons/fa';
import DocxViewer from './DocxViewer';
import { useAppSelector } from '../../../../hooks/reduxHooks';

export interface LeaveRequestWorkflowDescriptionPageProps {
  name: string;
  employeeName: string;
  employeeMainId: string;
  startDateDayNightType: string;
  endDateDayNightType: string;
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

export default function LeaveRequestWorkflowDescriptionPage(props: LeaveRequestWorkflowDescriptionPageProps) {
  const [collapsed, setCollapsed] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { user } = useAppSelector((state) => state.auth);

  const toggleCollapse = () => setCollapsed((prev) => !prev);
  const handleOpen = (index: number) => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);

  const renderField = (label: string, value: React.ReactNode) => (
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );

  const renderGrid = (fields: { label: string; value: React.ReactNode }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {fields.map((field, i) => (
        <div key={i}>{renderField(field.label, field.value)}</div>
      ))}
    </div>
  );

  return (
    <div className="mb-6">
      <button
        onClick={toggleCollapse}
        className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:shadow-lg transition-all"
      >
        {collapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        {collapsed ? 'Hiển thị thông tin đơn nghỉ phép' : 'Ẩn thông tin đơn nghỉ phép'}
      </button>

      {!collapsed && (
        <div className="mt-4 bg-white shadow-xl rounded-xl p-6 space-y-8 border border-gray-200">

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">📋 Thông tin đơn nghỉ</h3>
            {renderGrid([
              { label: 'Tên đơn', value: props.name },
              { label: 'Mã nhân viên', value: props.employeeMainId },
              { label: 'Tên nhân viên', value: props.employeeName },
              { label: 'Lý do', value: props.reason },
              { label: 'Ngày bắt đầu', value: props.startDate },
              { label: 'Ngày kết thúc', value: props.endDate },
              { label: 'Từ buổi', value: DayNightLabels[props.startDateDayNightType as DayNightEnum] },
              { label: 'Đến buổi', value: DayNightLabels[props.endDateDayNightType as DayNightEnum] },
              { label: 'Tổng số ngày nghỉ', value: props.totalDays },
              { label: 'Ngày phép hiện tại', value: props.employeeAnnualLeaveTotalDays },
              { label: 'Ngày phép còn lại', value: props.finalEmployeeAnnualLeaveTotalDays },
              { label: 'Loại phê duyệt', value: LeaveApprovalCategoryLabels[props.leaveAprrovalCategory as LeaveAprrovalCategoryEnum] },
            ])}
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">👨‍💼 Người được giao việc {user?.id === props.workAssignedToId ? '(Làm việc online)' : ''}</h3>
            {renderGrid([
              { label: 'ID', value: props.workAssignedToId },
              { label: 'Tên', value: props.workAssignedToName },
              { label: 'Chức vụ', value: props.workAssignedToPosition },
              { label: 'Số điện thoại', value: props.workAssignedToPhone },
              { label: 'Email', value: props.workAssignedToEmail },
              { label: 'Địa chỉ', value: props.workAssignedToHomeAdress },
            ])}
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">📎 File đính kèm</h3>
            {props.attachments.length > 0 ? (
              <ul className="space-y-4">
                {props.attachments.map((attachment, index) => {
                  const blobUrl = base64ToBlobUrl(
                    attachment.fileContent,
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                  );

                  return (
                    <li key={index} className="flex items-center justify-between bg-gray-50 border rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-700 font-medium">📄 {attachment.fileName}</span>
                      </div>

                      <div className="flex gap-4 items-center">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          title="Xem file"
                          onClick={() => handleOpen(index)}
                        >
                          <FaEye className="w-5 h-5" />
                        </button>
                        <a
                          href={blobUrl.url}
                          download={attachment.fileName}
                          className="text-green-600 hover:text-green-800"
                          title="Tải xuống"
                        >
                          <FaDownload className="w-5 h-5" />
                        </a>
                      </div>

                      {openIndex === index && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                          <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
                            <div className="flex justify-between items-center px-6 py-4 border-b">
                              <h3 className="text-lg font-bold text-gray-800">{attachment.fileName}</h3>
                              <button onClick={handleClose} className="text-gray-400 hover:text-red-500 text-xl">✕</button>
                            </div>
                            <div className="overflow-auto p-4 flex-1 bg-gray-50">
                              <DocxViewer blob={blobUrl.blob} />
                            </div>
                            <div className="flex justify-end p-4 border-t">
                              <button
                                onClick={handleClose}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                              >
                                Đóng
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
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
