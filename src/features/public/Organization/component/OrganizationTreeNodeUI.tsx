import { Children, ReactNode, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface OrganizationTreeNodeUIProps {
  label: string;
  mainId?: string;
  level?: number;
  onClick: () => void;
  children?: ReactNode;
}

export default function OrganizationTreeNodeUI({
  label,
  level = 0,
  onClick,
  children,
}: OrganizationTreeNodeUIProps) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = Children.count(children) > 0;
  const indentPx = level * 16;

  console.log('rendering', label, level, isOpen, hasChildren);

  return (
    <div>
      <div
        className="flex items-center p-2 rounded hover:bg-gray-100"
        style={{ paddingLeft: indentPx }}
      >
        {hasChildren && (
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="mr-2 focus:outline-none"
            aria-label={isOpen ? 'Collapse' : 'Expand'}
          >
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
        <span className="flex-1 cursor-pointer select-none" onClick={onClick}>
          {label}
        </span>
      </div>

      {hasChildren && isOpen && <div>{children}</div>}
    </div>
  );
}
