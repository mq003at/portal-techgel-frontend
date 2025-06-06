import React from 'react';

interface BadgeWrapperProps {
  label: string;
  color?: string;
}

export const BadgeWrapper: React.FC<BadgeWrapperProps> = ({ label, color = 'neutral' }) => {
  return (
    <span
      className={`badge text-center badge-${color} h-fit`}
      style={{color: color}}
    >
      {label}
    </span>
  );
};
