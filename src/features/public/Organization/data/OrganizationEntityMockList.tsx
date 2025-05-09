import { OrganizationEntityDTO } from '../DTOs/OrganizationEntityDTO';

export const rootOrganizationMockData: OrganizationEntityDTO = {
  id: '900000',
  name: 'Công ty Techgel',
  mainId: 'CT_TECHGEL', // Added mainId for consistency
  description: 'Công ty Cổ phần Kỹ Thuật Công Nghệ Sài Gòn Techgel', // Added description
  status: 'ACTIVE',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  level: 0,
  parentId: '', // Root has no parent
  parentName: '', // Root has no parent name
  childrenIds: ['1', '2', '3', '4'],
  childrenNames: ['Khối Dự Án', 'Khối Công Nghệ', 'Khối Hành Chính', 'Khối Tài Chính - Kế Toán'],
  // Optional fields like managerId, employeeIds etc. are omitted as they might not apply to the root entity itself.
  // Optional sortOrder and fullPathName are also omitted for simplicity in mock data.
};


export const divisionsMockData: OrganizationEntityDTO[] = [
  {
    id: '1',
    name: 'Khối Dự Án',
    status: 'ACTIVE',
    mainId: 'K_DA',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 1,

    managerId: 'TG99999',
    description:
      'Testing cho Khối Dự Án. Chạy chính xác sẽ bao gồm P.Mua Hàng và QA/QC. Người quản lý là TG99999 (DB ID là 1).',
    managerName: 'Trần Gia',

    parentId: '900000',
    parentName: 'Công ty Techgel',

    childrenIds: ['10', '11', '12', '13'],
    childrenNames: [
      'Phòng Mua Hàng',
      'Phòng Duyệt Dự Án',
      'Phòng QA/QC',
      'Phòng Bảo Hành - Bảo Trì',
    ],

    employeeIds: ['TG99999', 'TG99998', 'TG99997'],
    employeeNames: ['Trần Gia', 'Trần Văn', 'Trần Thị'],
  },
  {
    id: '2',
    name: 'Khối Công Nghệ',
    status: 'ACTIVE',
    mainId: 'K_CN',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 1,

    managerId: 'TG99988',
    description:
      'Khối Công Nghệ chịu trách nhiệm về công nghệ, phần mềm và kỹ thuật. Người quản lý là TG99988 (DB ID là 2).',
    managerName: 'Nguyễn Công',

    parentId: '900000',
    parentName: 'Công ty Techgel',

    childrenIds: ['14', '15', '16', '17'],
    childrenNames: [
      'Phòng Công Nghệ Thông Tin',
      'Phòng Hệ Thống Hạ Tầng',
      'Phòng Công Nghệ Kỹ Thuật',
      'Phòng IoT',
    ],

    employeeIds: ['TG99988', 'TG99987', 'TG99986'],
    employeeNames: ['Nguyễn Công', 'Nguyễn Văn', 'Nguyễn Thị'],
  },
  {
    id: '3',
    name: 'Khối Hành Chính',
    status: 'ACTIVE',
    mainId: 'K_HC',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 1,

    managerId: 'TG99977',
    description:
      'Khối Hành Chính chịu trách nhiệm về nhân sự, hành chính và văn thư. Người quản lý là TG99977 (DB ID là 3).',
    managerName: 'Lê Hành',

    parentId: '900000',
    parentName: 'Công ty Techgel',

    childrenIds: ['18'],
    childrenNames: ['Phòng Nhân Sự'],

    employeeIds: ['TG99977', 'TG99976'],
    employeeNames: ['Lê Hành', 'Lê Văn'],
  },
  {
    id: '4',
    name: 'Khối Tài Chính - Kế Toán',
    status: 'ACTIVE',
    mainId: 'K_TCKT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 1,

    managerId: 'TG99966',
    description:
      'Khối Tài Chính - Kế Toán phụ trách tài chính, kế toán và báo cáo tài chính. Người quản lý là TG99966 (DB ID là 4).',
    managerName: 'Phạm Tài',

    parentId: '900000',
    parentName: 'Công ty Techgel',

    childrenIds: ['19'],
    childrenNames: ['Phòng Kế Toán'],

    employeeIds: ['TG99966', 'TG99965'],
    employeeNames: ['Phạm Tài', 'Phạm Văn'],
  },
];

export const departmentsMockData: OrganizationEntityDTO[] = [
  {
    id: '10',
    name: 'Phòng Mua Hàng',
    status: 'ACTIVE',
    mainId: 'P_MH',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99950',
    description: 'Phòng chịu trách nhiệm thanh toán đơn hàng cho dự án',
    managerName: 'Võ Duyệt',

    parentId: '0',
    parentName: 'Khối Dự Án',

    childrenIds: [],
    childrenNames: [],
    employeeIds: ['TG99950', 'TG99949'],
    employeeNames: ['Võ Duyệt', 'Võ Văn'],
  },
  {
    id: '11',
    name: 'Phòng Duyệt Dự Án',
    status: 'ACTIVE',
    mainId: 'P_DDA',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99950',
    description: 'Phòng chịu trách nhiệm phê duyệt các dự án mới.',
    managerName: 'Võ Duyệt',

    parentId: '1',
    parentName: 'Khối Dự Án',

    childrenIds: [],
    childrenNames: [],
    employeeIds: ['TG99950', 'TG99949'],
    employeeNames: ['Võ Duyệt', 'Võ Văn'],
  },
  {
    id: '12',
    name: 'Phòng QA/QC',
    status: 'ACTIVE',
    mainId: 'P_QAQC',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99948',
    description: 'Phòng chịu trách nhiệm kiểm tra chất lượng sản phẩm.',
    managerName: 'Ngô Triển',

    parentId: '1',
    parentName: 'Khối Dự Án',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99948', 'TG99947'],
    employeeNames: ['Ngô Triển', 'Ngô Văn'],
  },

  {
    id: '13',
    name: 'Phòng Bảo Hành - Bảo Trì',
    status: 'ACTIVE',
    mainId: 'P_BHBT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99946',
    description: 'Phòng chịu trách nhiệm bảo hành và bảo trì sản phẩm.',
    managerName: 'Đặng Phát',

    parentId: '1',
    parentName: 'Khối Dự Án',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99946', 'TG99945'],
    employeeNames: ['Đặng Phát', 'Đặng Văn'],
  },
  {
    id: '14',
    name: 'Phòng Công Nghệ Thông Tin',
    status: 'ACTIVE',
    mainId: 'P_CNTT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99944',
    description: 'Phòng chịu trách nhiệm phát triển và quản lý hệ thống mạng và hạ tầng.',
    managerName: 'Phan Hệ',

    parentId: '2',
    parentName: 'Khối Công Nghệ',

    childrenIds: ['141'],
    childrenNames: ['Bộ Phận Hệ Thống Mạng'],

    employeeIds: ['TG99944', 'TG99943'],
    employeeNames: ['Phan Hệ', 'Phan Văn'],
  },

  {
    id: '15',
    name: 'Phòng Hệ Thống Hạ Tầng',
    status: 'ACTIVE',
    mainId: 'P_HTHT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99942',
    description: 'Phòng chịu trách nhiệm quản lý hệ thống mạng và hạ tầng.',
    managerName: 'Trịnh Nhân',

    parentId: '2',
    parentName: 'Khối Công Nghệ',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99942', 'TG99941'],
    employeeNames: ['Trịnh Nhân', 'Trịnh Văn'],
  },

  {
    id: '16',
    name: 'Phòng Công Nghệ Kỹ Thuật',
    status: 'ACTIVE',
    mainId: 'P_CNKT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99940',
    description: 'Phòng chịu trách nhiệm phát triển và quản lý công nghệ kỹ thuật.',
    managerName: 'Mai Kế',

    parentId: '2',
    parentName: 'Khối Công Nghệ',

    childrenIds: ['161'],
    childrenNames: ['Bộ Phận Nghiên Cứu - Phát Triển'],

    employeeIds: ['TG99940', 'TG99939'],
    employeeNames: ['Mai Kế', 'Mai Văn'],
  },
  {
    id: '19',
    name: 'Phòng Kế Toán',
    status: 'ACTIVE',
    mainId: 'P_KT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 2,

    managerId: 'TG99938',
    description: 'Phòng chịu trách nhiệm kế toán cho các dự án.',
    managerName: 'Đỗ Dự',

    parentId: '4',
    parentName: 'Khối Tài Chính - Kế Toán',

    childrenIds: ['191', '192', '193'],
    childrenNames: ['Bộ Phận Kế Toán Dự Án', 'Bộ Phận Thuế', 'Bộ Phận Ngân hàng - Tài sản'],

    employeeIds: ['TG99940', 'TG99939'],
    employeeNames: ['Mai Kế', 'Mai Văn'],
  },
];

export const sectionMockData: OrganizationEntityDTO[] = [
  // Sections
  {
    id: '141',
    name: 'Bộ Phận Hệ Thống Mạng',
    status: 'ACTIVE',
    mainId: 'BP_HTM',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 3,

    managerId: 'TG99935',
    description: 'Bộ phận quản lý hệ thống mạng nội bộ.',
    managerName: 'Lý Mạng',

    parentId: '15',
    parentName: 'Phòng Hệ Thống Hạ Tầng',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99935'],
    employeeNames: ['Lý Mạng'],
  },
  {
    id: '161',
    name: 'Bộ Phận Nghiên Cứu - Phát Triển',
    status: 'ACTIVE',
    mainId: 'BP_NCPT',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 3,

    managerId: 'TG99934',
    description: 'Bộ phận nghiên cứu và phát triển sản phẩm mới.',
    managerName: 'Bùi Phát',

    parentId: '16',
    parentName: 'Phòng Công Nghệ Kỹ Thuật',

    childrenIds: ['1611', '1612'],
    childrenNames: ['Ban Phát Triển Phần Cứng', 'Ban Phát Triển Phần Mềm'],

    employeeIds: ['TG99934'],
    employeeNames: ['Bùi Phát'],
  },
  {
    id: '191',
    name: 'Bộ Phận Kế Toán Dự Án',
    status: 'ACTIVE',
    mainId: 'BP_KTDA',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 3,

    managerId: 'TG99938',
    description: 'Bộ phận chuyên về kế toán cho các dự án.',
    managerName: 'Đỗ Dự',

    parentId: '19',
    parentName: 'Phòng Kế Toán',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99938'],
    employeeNames: ['Đỗ Dự'],
  },
  {
    id: '192',
    name: 'Bộ Phận Thuế',
    status: 'ACTIVE',
    mainId: 'BP_THUE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 3,

    managerId: 'TG99937',
    description: 'Bộ phận xử lý các vấn đề về thuế.',
    managerName: 'Nguyễn Thuế',

    parentId: '19',
    parentName: 'Phòng Kế Toán',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99937'],
    employeeNames: ['Nguyễn Thuế'],
  },
  {
    id: '193',
    name: 'Bộ Phận Ngân hàng - Tài sản',
    status: 'ACTIVE',
    mainId: 'BP_NHTS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 3,

    managerId: 'TG99936',
    description: 'Bộ phận quản lý tài khoản ngân hàng và tài sản.',
    managerName: 'Phạm Ngân',

    parentId: '19',
    parentName: 'Phòng Kế Toán',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99936'],
    employeeNames: ['Phạm Ngân'],
  },
];

export const unitMockData: OrganizationEntityDTO[] = [
  // Sub-Sections under Bộ Phận Nghiên Cứu - Phát Triển
  {
    id: '1611',
    name: 'Ban Phát Triển Phần Cứng',
    status: 'ACTIVE',
    mainId: 'BPT_PC',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 4,

    managerId: 'TG99931',
    description: 'Ban chuyên phát triển phần cứng sản phẩm.',
    managerName: 'Phạm Cứng',

    parentId: '161',
    parentName: 'Bộ Phận Nghiên Cứu - Phát Triển',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99931'],
    employeeNames: ['Phạm Cứng'],
  },
  {
    id: '1612',
    name: 'Ban Phát Triển Phần Mềm',
    status: 'ACTIVE',
    mainId: 'BPT_PM',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 4,

    managerId: 'TG99930',
    description: 'Ban chuyên phát triển phần mềm sản phẩm.',
    managerName: 'Trần Mềm',

    parentId: '161',
    parentName: 'Bộ Phận Nghiên Cứu - Phát Triển',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99930'],
    employeeNames: ['Trần Mềm'],
  },
];

export const teamMockData: OrganizationEntityDTO[] = [
  {
    id: '16121',
    name: 'Team 1',
    status: 'ACTIVE',
    mainId: 'T1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 5, // Teams are deeper level

    managerId: 'TG99921',
    description: 'Team 1 chuyên phát triển phần mềm hệ thống.',
    managerName: 'Nguyễn Team1',

    parentId: '1612',
    parentName: 'Ban Phát Triển Phần Mềm',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99921'],
    employeeNames: ['Nguyễn Team1'],
  },
  {
    id: '16122',
    name: 'Team 2',
    status: 'ACTIVE',
    mainId: 'T2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    level: 5,

    managerId: 'TG99920',
    description: 'Team 2 chuyên phát triển phần mềm ứng dụng.',
    managerName: 'Lê Team2',

    parentId: '1612',
    parentName: 'Ban Phát Triển Phần Mềm',

    childrenIds: [],
    childrenNames: [],

    employeeIds: ['TG99920'],
    employeeNames: ['Lê Team2'],
  },
];

const allOrg = [...divisionsMockData, ...departmentsMockData]
const OrganizaionEntityEmployeeData = [{id: 1, empId: 1, orgId: 1}]
