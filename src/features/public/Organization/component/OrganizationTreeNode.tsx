import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { OrganizationEntityDTO } from '../DTOs/OrganizationEntityDTO';
import { setSelectedOrganizationEntity } from '../store/selectedOrganizationEntitySlice';
import OrganizationTreeNodeUI from './OrganizationTreeNodeUI';

export function OrganizationTreeNode({
  entity,
  level,
  onSelect,
}: {
  entity: OrganizationEntityDTO;
  level: number;
  onSelect: (e: OrganizationEntityDTO) => void;
}) {
  console.log('rendering', entity); // now entity.children is the real array
  return (
    <OrganizationTreeNodeUI label={entity.name} level={level} onClick={() => onSelect(entity)}>
      {entity.children?.map((child) => (
        <OrganizationTreeNode key={child.id} entity={child} level={level + 1} onSelect={onSelect} />
      ))}
    </OrganizationTreeNodeUI>
  );
}
