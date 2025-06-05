import InputFieldProps from '../../../../components/Form/types/InputFieldProps';
import { EmployeeMockData } from '../../../restricted/EmployeeList/data/employeeData';
import { documentCategoryOptions, documentConfidentialityLevelOptions, documentIsLegalOptions, documentStatusOptions, documentSubTypeOptions, documentTypeOptions } from '../constants/DocumentTypeOptions';

export const generalDocumentInfoFields: InputFieldProps[] = [
  {
    label: 'Tên',
    name: 'name',
    required: true,
  },
  {
    label: 'Kiểu',
    name: 'type',
    type: 'select',
    options: [
      ...documentTypeOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'File',
    name: 'file',
    type: 'file',
    files: {
      multiple: false,
      accept: "application/pdf",
    },
  },
  {
    label: 'Trạng thái',
    name: 'status',
    type: 'select',
    options: [
      ...documentStatusOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'Phụ đề',
    name: 'subType',
    type: 'select',
    options: [
      ...documentSubTypeOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'Loại',
    name: 'category',
    type: 'select',
    options: [
      ...documentCategoryOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
  {
    label: 'Mã người sỡ hữu',
    name: 'ownerId',
    required: true,
  },
  {
    label: 'Tên người sỡ hữu',
    name: 'ownerName',
    required: true,
  },
  {
    label: 'Mã đơn vị chịu trách nhiệm',
    name: 'organizationEntityResponsibleId',
    required: true,
  },
  {
    label: 'Tên đơn vị chịu trách nhiệm',
    name: 'organizationEntityResponsibleName',
    required: false,
  },
  {
    label: 'Tag',
    name: 'tag',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [],
      allowNew: true
    }
  },
  {
    label: 'Mô tả',
    name: 'description',
    required: true,
  },
  {
    label: 'Đường dẫn',
    name: 'url',
    required: true,
  },
  {
    label: 'Phiên bản',
    name: 'Phiên bản',
    required: false,
  },
  {
    label: 'Mã quy trình',
    name: 'workflowIds',
    type: 'tags',
    required: false,
    tags: {
      suggestions: [{label: '1', value: 1}, {label: '2', value: 2}, {label: '3', value: 3}],
      allowNew: false
    }
  },
  {
    label: 'Tên quy trình',
    name: 'workflowNames',
    type: 'tags',
    required: false,
    tags: {
      suggestions: [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}, {label: 'c', value: 'c'}],
      allowNew: false
    }
  },
];


export const legalDocumentInfoFields: InputFieldProps[] = [
  {
    label: 'Ngày soạn thảo',
    name: 'draftDate',
    type: 'date',
    required: true,
  },
  {
    label: 'Ngày xuất bản',
    name: 'publishDate',
    type: 'date',
    required: true,
  },
  {
    label: 'Ngày có hiệu lực',
    name: 'effectiveDate',
    type: 'date',
    required: true,
  },
  {
    label: 'Ngày hết hạn',
    name: 'expiredDate',
    type: 'date',
    required: true,
  },
  {
    label: 'Ngày phê duyệt cuối cùng',
    name: 'finalAprovalDate',
    type: 'date',
    required: true,
  },
  {
    label: 'Ngày nghiệm thu',
    name: 'inspectionDate',
    type: 'date',
    required: true,
  },
  {
    label: 'Mã người soạn thảo',
    name: 'draftByIds',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người soạn thảo',
    name: 'draftByNames',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Mã người xuất bản',
    name: 'publishByIds',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người xuất bản',
    name: 'publishByNames',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Mã người phê duyệt',
    name: 'approvalByIds',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người phê duyệt',
    name: 'approvalByNames',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Mã người nghiệm thu',
    name: 'inspectionByIds',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người nghiệm thu',
    name: 'inspectionByNames',
    required: true,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Tính pháp lý',
    name: 'isLegalDocument',
    type: 'select',
    options: [
      ...documentIsLegalOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
    required: false,
  },
]

export const securityInfoFields: InputFieldProps[] = [
  {
    label: 'Mức độ đọc',
    name: 'confidentialityReadLevel',
    type: 'select',
    options: [
      ...documentConfidentialityLevelOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
  },
  {
    label: 'Mức độ ghi',
    name: 'confidentialityWriteLevel',
    type: 'select',
    options: [
      ...documentConfidentialityLevelOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
  },
  {
    label: 'Mức độ hiển thị',
    name: 'confidentialityVisibilityLevel',
    type: 'select',
    options: [
      ...documentConfidentialityLevelOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
  },
  {
    label: 'Mức độ thay đổi trạng thái',
    name: 'confidentialityStatusChangeLevel',
    type: 'select',
    options: [
      ...documentConfidentialityLevelOptions.map((d) => (
        {value: d.value, label: d.label}
      ))
    ],
  },
  {
    label: 'Mã người được đọc',
    name: 'confidentialityReadIds',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người được đọc',
    name: 'confidentialityReadNames',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Mã người được ghi',
    name: 'confidentialityWriteIds',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người được ghi',
    name: 'confidentialityWriteNames',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Mã người được hiển thị',
    name: 'confidentialityVisibilityIds',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người được hiển thị',
    name: 'confidentialityVisibilityNames',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
  {
    label: 'Mã người được thay đổi trạng thái',
    name: 'confidentialityStatusChangeIds',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: e.id, value: e.id}))],
      allowNew: false
    }
  },
  {
    label: 'Tên người được thay đổi trạng thái',
    name: 'confidentialityStatusChangeNames',
    required: false,
    type: 'tags',
    tags: {
      suggestions: [...EmployeeMockData.map((e) => ({label: `${e.firstName} ${e.middleName} ${e.lastName}`, value: `${e.firstName} ${e.middleName} ${e.lastName}`}))],
      allowNew: false
    }
  },
];

export const additionalInfoFields: InputFieldProps[] = [
  {
    label: 'Lượt tải',
    name: 'downloadCount',
    type: 'number',
    required: false,
  },
  {
    label: 'Lượt xem',
    name: 'viewCount',
    type: 'number',
    required: false,
  },
  {
    label: 'Lượt chỉnh sửa',
    name: 'editCount',
    type: 'number',
    required: false,
  },
  {
    label: 'Tài liệu liên quan',
    name: 'relateDocuments',
    required: false,
  }
];