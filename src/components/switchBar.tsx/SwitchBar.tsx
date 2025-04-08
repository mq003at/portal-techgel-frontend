import { useState } from 'react';

export interface TabConfig {
  name: string;
  label: string;
}

interface SwitchBarProps {
  tabs: TabConfig[];
  onTabChange?: (tabName: string) => void;
  initialTab?: string;
}

export const SwitchBar = ({ tabs, onTabChange, initialTab }: SwitchBarProps) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0]?.name);

  const handleTabClick = (tab: TabConfig) => {
    setActiveTab(tab.name);
    onTabChange?.(tab.name);
  };

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => handleTabClick(tab)}
          className={`py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === tab.name
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
