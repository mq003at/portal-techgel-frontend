import { useDispatch } from 'react-redux';
import { useGetDivisionsQuery } from '../api/DivisionApi';
import OrganizationTreeNode from './OrganizationTreeNode';
import { setSelectedOrganizationEntity } from '../store/selectedOrganizationEntitySlice';
import { useEffect } from 'react';

export default function OrganizationTree() {
  const dispatch = useDispatch();
  const { data: divisions = [] } = useGetDivisionsQuery();

  useEffect(() => {
    if (divisions.length > 0) {
      console.log('div', divisions);
    }
  }, [divisions]);

  return (
    <div className="">
      {divisions.map((division) => (
        <OrganizationTreeNode
          key={division.id}
          label={division.name}
          mainId={division.mainId}
          level={2}
          onClick={() => dispatch(setSelectedOrganizationEntity(division))}
        >
          {division.departments?.map((dept) => (
            <OrganizationTreeNode
              key={dept.id}
              label={dept.name}
              mainId={dept.mainId}
              level={3}
              onClick={() => dispatch(setSelectedOrganizationEntity(dept))}
            >
              {dept.sections?.map((section) => (
                <OrganizationTreeNode
                  key={section.id}
                  label={section.name}
                  mainId={section.mainId}
                  level={4}
                  onClick={() => dispatch(setSelectedOrganizationEntity(section))}
                >
                  {section.units?.map((unit) => (
                    <OrganizationTreeNode
                      key={unit.id}
                      label={unit.name}
                      mainId={unit.mainId}
                      level={5}
                      onClick={() => dispatch(setSelectedOrganizationEntity(unit))}
                    >
                      {unit.teams?.map((team) => (
                        <OrganizationTreeNode
                          key={team.id}
                          label={team.name}
                          mainId={team.mainId}
                          level={6}
                          onClick={() => dispatch(setSelectedOrganizationEntity(team))}
                        />
                      ))}
                    </OrganizationTreeNode>
                  ))}
                </OrganizationTreeNode>
              ))}
            </OrganizationTreeNode>
          ))}
        </OrganizationTreeNode>
      ))}
    </div>
  );
}
