import { EmployeeDTO } from './EmployeeDTO';

export const employeeFormInitialValues: EmployeeDTO = {
  id: '',
  mainId: '',
  firstName: '',
  middleName: '',
  lastName: '',

  createdAt: '',
  updatedAt: '',

  personalInfo: {
    gender: 'OTHER',
    address: '',
    dateOfBirth: '',
    maritalStatus: 'SINGLE',
    nationality: '',
    personalEmail: '',
    personalPhoneNumber: '',
    avatar: '',
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
    divisionIds: [],
    departmentIds: [],
    sectionIds: [],
    unitIds: [],
    teamIds: [],

    managesDivisionIds: [],
    managesDepartmentIds: [],
    managesSectionIds: [],
    managesUnitIds: [],
    managesTeamIds: [],

    managerId: '',
    subordinates: [],
    groupIds: [],
  },
};
