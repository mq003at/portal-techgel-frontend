import { OrganizationEntitySummaryDTO } from '../DTOs/OrganizationEntityDTO';
import OrganizationTreeNodeUI from './OrganizationTreeNodeUI';

export function OrganizationTreeNode({
  entity,
  level,
  onSelect,
}: {
  entity: OrganizationEntitySummaryDTO;
  level: number;
  onSelect: (e: OrganizationEntitySummaryDTO) => void;
}) {
  return (
    <OrganizationTreeNodeUI label={entity.name} level={level} onClick={() => onSelect(entity)}>
      {entity.children?.map((child) => (
        <OrganizationTreeNode key={child.id} entity={child} level={level + 1} onSelect={onSelect} />
      ))}
    </OrganizationTreeNodeUI>
  );
}
