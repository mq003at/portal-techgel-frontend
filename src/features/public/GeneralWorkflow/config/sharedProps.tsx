import InputFieldProps from "../../../../components/Form/types/InputFieldProps";
import { EmployeeMockData } from "../../../restricted/EmployeeList/data/employeeData";
import { generalWorkflowLogicOptions, GeneralWorkflowStatusOptions } from "../constants/GeneralWorkflowTypeOptions";


export const generalInfoFields: InputFieldProps[] = [
  {
    label: 'Tên',
    name: 'name',
    required: true,
  },
  {
    label: 'Trạng thái',
    name: 'status',
    type: 'select',
    options: [
      ...GeneralWorkflowStatusOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'Logic',
    name: 'workflowLogic',
    type: 'select',
    options: [
      ...generalWorkflowLogicOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'Được phê duyệt bởi ID',
    name: 'approvedByIds',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Được phê duyệt bởi tên',
    name: 'approvedByNames',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Được phê duyệt bởi chữ ký',
    name: 'approvedBySignatures',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [],
      allowNew: true
    }
  },
  {
    label: 'Được soạn thảo bởi ID',
    name: 'draftedByIds',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Được soạn thảo bởi tên',
    name: 'draftedByNames',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Được soạn thảo bởi chữ ký',
    name: 'draftedBySignatures',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [],
      allowNew: true
    }
  },
  {
    label: 'Hạn ngạch',
    name: 'quota',
    required: false,
  },
];

export const approvalNodesFields: InputFieldProps[] = [
  {
    label: 'Tên',
    name: 'name',
    required: true,
  },
  {
    label: 'ID người gửi',
    name: 'senderId',
    required: true,
  },
  {
    label: 'Tên người gửi',
    name: 'senderName',
    required: true,
  },
  {
    label: 'Nội dung người gửi',
    name: 'senderMessage',
    required: false,
  },
  {
    label: 'ID người nhận',
    name: 'receiverId',
    required: true,
  },
  {
    label: 'Tên người nhận',
    name: 'receiverName',
    required: true,
  },
  {
    label: 'Trạng thái',
    name: 'approvalStatus',
    type: 'select',
    options: [
      ...GeneralWorkflowStatusOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'Thứ tự',
    name: 'order',
    type: 'number',
    required: true,
  }
];

