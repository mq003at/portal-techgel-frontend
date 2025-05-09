import { uiAvatar } from '../../../../components/misc/uiAvatar';
import { EmployeeDTO } from '../DTOs/EmployeeDTO';

export const EmployeeMockData: EmployeeDTO[] = [
  {
    id: '1',
    mainId: 'TG99999',
    firstName: 'Techgel',
    lastName: 'Testing',
    middleName: 'Inc.',
    avatar: uiAvatar({ name: 'Techgel Testing' }),

    personalInfo: {
      gender: 'OTHER',
      dateOfBirth: '1992-04-10',
      personalEmail: 'techgel.testing@gmail.com',
      nationality: 'Vietnam',
      maritalStatus: 'DIVORCED',

      personalPhoneNumber: '0123456789',
      address: '123 Le Duan, District 1, HCMC',
      idCardNumber: '0123456789',
      idCardExpiryDate: '2029-04-10',
    },

    companyInfo: {
      companyEmail: 'techgel.testing@techgel.com',
      companyPhoneNumber: '0123456789',
      startDate: '2023-01-01',
      endDate: undefined,
      probationStartDate: '2023-01-01',
      probationEndDate: '2023-03-31',
      employmentStatus: 'ACTIVE',
      position: 'Thử Nghiệm',
    },

    careerPathInfo: {},

    taxInfo: {},
    insuranceInfo: {
      insuranceNumber: '12356780',
      provider: 'Bao Viet',
    },

    emergencyContactInfo: {
      emergencyContactName: 'Nguyen Hoang Minh Quan',
      emergencyContactPhone: '0123456789',
    },
    roleInfo: {},
    scheduleInfo: {},
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',
  },

  {
    id: '2',
    mainId: 'TG99998',
    firstName: 'Techgel',
    lastName: 'Testing-2',
    middleName: 'By Quan',
    avatar: uiAvatar({ name: 'Techgel Testing' }),
    personalInfo: {
      gender: 'MALE',
      dateOfBirth: '1992-04-10',
      personalEmail: 'techgel.testing@gmail.com',
      nationality: 'Vietnam',
      maritalStatus: 'DIVORCED',
      personalPhoneNumber: '0123456789',
      address: '123 Le Duan, District 1, HCMC',
      idCardNumber: '0123456789',
      idCardExpiryDate: '2029-04-10',
    },

    companyInfo: {
      companyEmail: 'techgel.testing@techgel.com',
      companyPhoneNumber: '0123456789',
      startDate: '2023-01-01',
      endDate: undefined,
      probationStartDate: '2023-01-01',
      probationEndDate: '2023-03-31',
      employmentStatus: 'ACTIVE',
      position: 'Thử Nghiệm',
    },

    careerPathInfo: {},

    taxInfo: {},
    insuranceInfo: {
      insuranceNumber: '12356780',
      provider: 'Hang Lam',
    },

    emergencyContactInfo: {
      emergencyContactName: 'Nguyen Hoang Minh Quan',
      emergencyContactPhone: '0123456789',
    },
    roleInfo: {
      supervisorId: '1',
      supervisorName: 'Techgel Testing',
      roleDetailsInfo: [{
        organizationEntityId: '1',
        organizationEntityName: 'abc',
        managesOrganizationEntityId: '1',
        managesOrganizationEntityName: 'abc',
        subordinateId: '3',
        subordinateName: 'Nguyễn Hoàng Minh Quân',
        groupId: '1'
      }]
    },
    scheduleInfo: {},
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',
  },

  {
    id: '3',
    mainId: 'TG99997',
    firstName: 'Quân',
    lastName: 'Nguyễn',
    middleName: 'Hoàng Minh',
    avatar:
      'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2025/03/28/85ccab80-a12c-47ce-b5df-ec2595669d11_fb4d2dcc.jpg?itok=JMVr7rV1&v=1743129436',

    personalInfo: {
      gender: 'MALE',
      dateOfBirth: '1998-08-18',
      personalEmail: 'mq003at@gmail.com',
      nationality: 'Vietnam',
      maritalStatus: 'SINGLE',
      personalPhoneNumber: '0123456789',
      address: '123 Le Duan, District 1, HCMC',
      idCardNumber: '0123456789',
      idCardExpiryDate: '2029-04-10',
    },

    companyInfo: {
      companyEmail: 'quan.nhm@techgel.com',
      companyPhoneNumber: '0123456789',
      startDate: '2023-01-01',
      endDate: undefined,
      probationStartDate: '2023-01-01',
      probationEndDate: '2023-03-31',
      employmentStatus: 'GUEST',
      position: 'Thử Nghiệm',
    },

    careerPathInfo: {},

    taxInfo: {},
    insuranceInfo: {
      insuranceNumber: '12356780',
      provider: 'Hang Lam',
      expiryDate: '2029-04-10',
      effectiveDate: '2023-01-01',
    },

    emergencyContactInfo: {
      emergencyContactName: 'Nguyen Hoang Minh Quan',
      emergencyContactPhone: '0123456789',
    },
    roleInfo: {
      supervisorId: '2',
      supervisorName: 'Testing-2 By Quan Techgel',
    },
    scheduleInfo: {},
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',
  },

  {
    id: '4',
    mainId: 'TG99996',
    firstName: 'Patricia',
    lastName: 'Mascorro',
    middleName: 'P.',
    avatar: uiAvatar({ name: 'Techgel Testing' }),
    personalInfo: {
      gender: 'FEMALE',
      dateOfBirth: '1996-01-11',
      personalEmail: 'PatriciaPMascorro@dayrep.com',
      nationality: 'American',
      maritalStatus: 'MARRIED',
      personalPhoneNumber: '9856259019',
      address: '408 Lewis Street, Wheeling, Illinois(IL)',
      idCardNumber: '164649979968',
      idCardExpiryDate: '2030-05-06',
    },

    companyInfo: {
      companyEmail: 'techgel.testing@techgel.com',
      companyPhoneNumber: '0123456789',
      startDate: '2023-01-01',
      endDate: undefined,
      probationStartDate: '2023-01-01',
      probationEndDate: '2023-03-31',
      employmentStatus: 'ACTIVE',
      position: 'Thử Nghiệm',
    },

    careerPathInfo: {},

    taxInfo: {},
    insuranceInfo: {
      insuranceNumber: '12356780',
      provider: 'Hang Lam',
    },

    emergencyContactInfo: {
      emergencyContactName: 'Nguyen Hoang Minh Quan',
      emergencyContactPhone: '0123456789',
    },
    roleInfo: {
      supervisorId: '1',
      supervisorName: 'Techgel Testing',
      roleDetailsInfo: [{
        organizationEntityId: '1',
        organizationEntityName: 'abc',
        managesOrganizationEntityId: '1',
        managesOrganizationEntityName: 'abc',
        subordinateId: '3',
        subordinateName: 'Nguyễn Hoàng Minh Quân',
        groupId: '1'
      }]
    },
    scheduleInfo: {},
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',
  },
];
