import { useGetOrganizationEntitiesQuery } from '../api/OrganizationEntityApi';
import { OrganizationTreeNode } from './OrganizationTreeNode';
import { setSelectedOrganizationEntity } from '../store/selectedOrganizationEntitySlice';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { useMemo } from 'react';

export default function OrganizationTree() {
  const { data = [], isLoading, isError } = useGetOrganizationEntitiesQuery();
  const dispatch = useAppDispatch();

  const organizationEntities = useMemo(() => data.filter(d => d.level === 1), [data]);

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error loading organizations</p>;

  return (
    <div>
      {organizationEntities.map((root) => (
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
