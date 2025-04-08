import React from 'react';

interface StatusBadgeProps {
  label: string;
  color?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ label, color = 'neutral' }) => {
  console.log('badge', label, color);
  return (
    <span
      className={`badge text-center  badge-${color}`}
      style={{ height: 'fit-content', width: '-webkit-fill-available' }}
    >
      {label}
    </span>
  );
};

export default StatusBadge;
