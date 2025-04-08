import { useState } from 'react';
import { useAppSelector } from '../../../../hooks/reduxHooks';

interface TreeNodeProps {
  label: string;
  children?: React.ReactNode;
  level?: number;
  onClick?: () => void;
  mainId?: string;
}

export default function OrganizationTreeNode({
  label,
  children,
  level = 0,
  onClick,
  mainId,
}: TreeNodeProps) {
  const [expanded, setExpanded] = useState(true);
  const selected = useAppSelector((state) => state.selectedOrganizationEntity.selected);
  const isSelected = selected?.mainId === mainId;

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center cursor-pointer hover:underline ${
          isSelected ? 'text-blue-600 font-semibold' : ''
        }`}
        style={{ paddingLeft: `${(level - 2) * 16}px` }}
        onClick={() => {
          if (children) setExpanded(!expanded);
          if (onClick) onClick();
        }}
      >
        {children ? (
          <span className="mr-1">{expanded ? '▾' : '▸'}</span>
        ) : (
          <span className="mr-4" />
        )}
        <span>{label}</span>
      </div>
      {expanded && children && <div>{children}</div>}
    </div>
  );
}
