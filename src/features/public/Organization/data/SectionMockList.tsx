import { SectionDTO } from '../DTOs/SectionDTO';
import { EmployeeSection } from '../models/MTMOperationalOrganization';

export const sectionMockData: SectionDTO[] = [
  {
    id: '1',
    name: 'Bộ Phận Pháp Chế & QLHTCL',
    mainId: 'BP_PCQLHTCL',
    status: 'PENDING',
    description:
      'Mẫu thử nghiệm cho Bộ Phận. Thành viên là Quân, quản lý là Quân, 1 Ban, dưới ban là 1 tổ. ID là 1.',
    managerId: '3',

    departmentId: '4',
    createdAt: new Date().toISOString(),
    unitIds: ['1'],
    employeeIds: ['3'],
  },
];

export const employeeSectionMockData: EmployeeSection[] = [];
