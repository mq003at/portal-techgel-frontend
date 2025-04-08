import { DepartmentDTO } from "../DTOs/DepartmentDTO";
import { DivisionDTO } from "../DTOs/DivisionDTO";
import { SectionDTO } from "../DTOs/SectionDTO";
import { TeamDTO } from "../DTOs/TeamDTO";
import { UnitDTO } from "../DTOs/UnitDTO";

export type OrgEntity = DivisionDTO | DepartmentDTO | SectionDTO | UnitDTO | TeamDTO;
