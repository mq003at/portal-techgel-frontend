import { useGetOrganizationEntitiesQuery } from '../api/OrganizationEntityApi';
import { OrganizationTreeNode } from './OrganizationTreeNode';
import { setSelectedOrganizationEntity } from '../store/selectedOrganizationEntitySlice';
import { useAppDispatch } from '../../../../hooks/reduxHooks';

export default function OrganizationTree() {
  const { data = [], isLoading, isError } = useGetOrganizationEntitiesQuery();
  const dispatch = useAppDispatch();

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error loading organizations</p>;

  return (
    <div>
      {data.map((root) => (
        <OrganizationTreeNode
          key={root.id}
          entity={root}
          level={0}
          onSelect={(e) => dispatch(setSelectedOrganizationEntity(e))}
        />
      ))}
    </div>
  );
}
