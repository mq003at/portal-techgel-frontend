import { useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ListTable } from "../../Table/listTable";
import { BasicGeneralWorkflowInfo, generalWorkflowBasicColumns } from "../tables/columns/basicGeneralWorkflowInfoColumns";
import { FaPlus } from "react-icons/fa";
import { SwitchBar } from "../../../../components/switchBar.tsx/SwitchBar";
import { ItemParams } from "react-contexify";
import { useGetLeaveRequestWorkflowsQuery } from "../api/LeaveRequestWorkflowApi";
import { LeaveRequestWorkflowDTO } from "../DTOs/LeaveRequestWorkflowDTO";
import { LeaveRequestWorkflowTabKey, leaveRequestWorkflowTabs, TabToDTOMap } from "../config/GeneralWorkflowTabs";


export default function LeaveRequestWorkflowViewPage() {
    const [currentTab, setCurrentTab] = useState<LeaveRequestWorkflowTabKey>('');
    const [searchParams] = useSearchParams();

    const { data: leaveRequestWorkflows = [], isLoading, isFetching } = useGetLeaveRequestWorkflowsQuery();

    const navigate = useNavigate();

    if(isLoading || isFetching){
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }

    const handleViewApprovalNode = ({ props }: ItemParams) => {
        navigate(`/main/leave-request/${props.id}/nodes`);
    }

    function renderNestedTable<T extends LeaveRequestWorkflowTabKey>(tabKey: T, leaveRequestWorkflows: LeaveRequestWorkflowDTO[], title: string){
        // const nestedData = leaveRequestWorkflows.map((g) => g[tabKey]) as TabToDTOMap[T][];
        // const columns = generalWorkflowColumnMap[tabKey] as ColumnDef<TabToDTOMap[T], any>[];

        const basicData = leaveRequestWorkflows.map((g) => ({
            id: g.id,
            mainId: g.mainId,
            name: g.name,
            description: g.description,
            status: g.status,
            employeeId: g.employeeId,
            employeeName: g.employeeName,
            reason: g.reason,
            startDate: g.startDate,
            endDate: g.endDate,
            employeeAnnualLeaveTotalDays: g.employeeAnnualLeaveTotalDays,
            leaveApprovalCategory: g.leaveAprrovalCategory,
        }));

        const contextMenu = [
            {label: 'Xem thứ tự quy trình', handle: handleViewApprovalNode}
        ];

        return (
            <ListTable<BasicGeneralWorkflowInfo>
                title={`Bảng ${title}`}
                slug={`leave-requests`}
                contextMenu={contextMenu}
                basicData={basicData}
                basicListColumns={generalWorkflowBasicColumns}
            />
        )
    }

    const handleTabChange = (tabName: string) => {
        setCurrentTab(tabName as LeaveRequestWorkflowTabKey);
    };

    return (
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Danh sách quy trình</h2>
            <button
                className="btn btn-primary flex items-center gap-2"
                onClick={() => navigate('/main/leave-request/add')}
            >
                <FaPlus /> Tạo quy trình
            </button>
            </div>
    
            <SwitchBar tabs={leaveRequestWorkflowTabs} onTabChange={handleTabChange} initialTab={currentTab} />
    
            {renderNestedTable(
                currentTab,
                leaveRequestWorkflows,
                leaveRequestWorkflowTabs.find((tab) => tab.name === currentTab)?.label || 'N/A'
            )}
        </div>
    )
}