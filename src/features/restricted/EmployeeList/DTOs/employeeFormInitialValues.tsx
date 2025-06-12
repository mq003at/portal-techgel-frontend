import { CreateEmployeeDTO } from './EmployeeDTO';

export const employeeFormInitialValues: CreateEmployeeDTO = {
  mainId: '',
  firstName: '',
  middleName: '',
  lastName: '',

  personalInfo: {
    gender: 'OTHER',
    address: '',
    dateOfBirth: new Date(),
    maritalStatus: 'SINGLE',
    birthPlace: '',
    ethnicGroup: '',
    nationality: '',
    personalEmail: '',
    personalPhoneNumber: '',
    idCardNumber: '',
    idCardExpiryDate: new Date(),
    idCardIssueDate: new Date(),
  },

  companyInfo: {
    companyEmail: '',
    companyPhoneNumber: '',
    employmentStatus: 'INACTIVE',
    position: '',
    department: '',
    startDate: new Date(),
    endDate: new Date(),
    probationStartDate: new Date(),
    probationEndDate: new Date(),
    annualLeaveTotalDays: 0
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
    effectiveDate: new Date(),
    expiryDate: new Date(),
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
