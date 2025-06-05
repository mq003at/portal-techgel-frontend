import { useNavigate, useSearchParams } from 'react-router';
import { useGetGeneralWorkflowsQuery } from '../api/GeneralWorkflowApi';
import { useState } from 'react';
import {
  GeneralWorkflowTabKey,
  generalWorkflowTabs,
  TabToDTOMap,
} from '../config/GeneralWorkflowTabs';
import { generalWorkflowColumnMap } from '../tables/tableTypes';
import { ColumnDef } from '@tanstack/react-table';
import { ListTable } from '../../Table/listTable';
import {
  BasicGeneralWorkflowInfo,
  generalWorkflowBasicColumns,
} from '../tables/columns/basicGeneralWorkflowInfoColumns';
import { GeneralWorkflowDTO } from '../DTOs/GeneralWorkflowDTO';
import { FaPlus } from 'react-icons/fa';
import { SwitchBar } from '../../../../components/switchBar.tsx/SwitchBar';
import { ItemParams } from 'react-contexify';

export default function GeneralWorkflowViewPage() {
  const [currentTab, setCurrentTab] = useState<GeneralWorkflowTabKey>('generalInfo');
  const [searchParams] = useSearchParams();

  const { data: generalWorkflows = [], isLoading, isFetching } = useGetGeneralWorkflowsQuery();

  const navigate = useNavigate();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  const handleViewApprovalWorkflowNodes = ({ props }: ItemParams) => {
    navigate(`/main/general-workflow/${props.id}/steps`);
  };

  function renderNestedTable<T extends GeneralWorkflowTabKey>(
    tabKey: T,
    generalWorkflows: GeneralWorkflowDTO[],
    title: string
  ) {
    const nestedData = generalWorkflows.map((g) => g[tabKey]) as TabToDTOMap[T][];
    const columns = generalWorkflowColumnMap[tabKey] as ColumnDef<TabToDTOMap[T], any>[];

    const basicData = generalWorkflows.map((g) => ({
      id: g.id,
      mainId: g.mainId,
    }));

    const contextMenu = [
      { label: 'Xem thứ tự quy trình', handle: handleViewApprovalWorkflowNodes },
    ];

    return (
      <ListTable<BasicGeneralWorkflowInfo, TabToDTOMap[T]>
        title={`Bảng ${title}`}
        slug={`generalWorkflow`}
        contextMenu={contextMenu}
        basicData={basicData}
        basicListColumns={generalWorkflowBasicColumns}
        nestedData={nestedData}
        nestedColumns={columns}
      />
    );
  }

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName as GeneralWorkflowTabKey);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Danh sách quy trình</h2>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => navigate('/main/general-workflow/add')}
        >
          <FaPlus /> Tạo quy trình
        </button>
      </div>

      <SwitchBar tabs={generalWorkflowTabs} onTabChange={handleTabChange} initialTab={currentTab} />

      {renderNestedTable(
        currentTab,
        generalWorkflows,
        generalWorkflowTabs.find((tab) => tab.name === currentTab)?.label || 'N/A'
      )}
    </div>
  );
}
