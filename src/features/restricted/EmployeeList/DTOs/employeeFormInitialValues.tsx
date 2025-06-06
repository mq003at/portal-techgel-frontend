import { CreateEmployeeDTO, EmployeeDTO } from './EmployeeDTO';

export const employeeFormInitialValues: CreateEmployeeDTO = {
  mainId: '',
  firstName: '',
  middleName: '',
  lastName: '',

  personalInfo: {
    gender: 'OTHER',
    address: '',
    dateOfBirth: '',
    maritalStatus: 'SINGLE',
    nationality: '',
    personalEmail: '',
    personalPhoneNumber: '',
    idCardNumber: '',
    idCardExpiryDate: '',
    idCardIssueDate: '',
  },

  companyInfo: {
    companyEmail: '',
    companyPhoneNumber: '',
    employmentStatus: 'INACTIVE',
    position: '',
    department: '',
    startDate: '',
    endDate: '',
    probationStartDate: '',
    probationEndDate: '',
  },

  careerPathInfo: {
    degree: [],
    certification: [],
    specialization: [],
  },

  taxInfo: {
    taxId: '',
    taxStatus: '',
    region: '',
  },

  insuranceInfo: {
    insuranceNumber: '',
    provider: '',
    effectiveDate: '',
    expiryDate: '',
  },

  emergencyContactInfo: {
    emergencyContactName: '',
    emergencyContactPhone: '',
    relationship: '',
    emergencyContactCurrentAddress: '',
    emergencyContactPermanentAddress: '',
  },

  scheduleInfo: {
    workSchedule: '',
    isRemoteStatus: false,
    shiftType: '',
  },

  roleInfo: {
    organizationEntityIds: [],
    organizationEntityNames: [],

    managedOrganizationEntityIds: [],
    managedOrganizationEntityNames: [],

    supervisorId: undefined,
    supervisorName: undefined,

    subordinateIds: [],
    subordinateNames: [],

    groupId: undefined,
  },
};
