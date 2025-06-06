import { useNavigate, useParams, useSearchParams } from "react-router";
import { useGetDocumentsByCateQuery, useGetDocumentsQuery } from "../api/documentApi";
import { useEffect, useState } from "react";
import { DocumentTabKey, documentTabs, TabToDTOMap } from "../configs/documentTabs";
import { DocumentDTO } from "../DTOs/DocumentDTO";
import { documentColumnMap } from "../tables/tableTypes";
import { ColumnDef } from "@tanstack/react-table";
import { ListTable } from "../../Table/listTable";
import { BasicDocumentInfo } from "../tables/columns/generalDocumentInfoColumns";
import { documentBasicColumns } from "../tables/columns/basicDocumentInfoColumns";
import { FaPlus } from "react-icons/fa";
import { SwitchBar } from "../../../../components/switchBar.tsx/SwitchBar";
import { ItemParams } from "react-contexify";

export default function DocumentsManagementViewPage(){
    const [currentTab, setCurrentTab] = useState<DocumentTabKey>('generalDocumentInfo');
    const [searchParams] = useSearchParams();
    const cate =  searchParams.get('cate') || '';

    const { data: documents = [], isLoading, isFetching } = useGetDocumentsByCateQuery(cate, {refetchOnMountOrArgChange: true});

    const navigate = useNavigate();

    if (isLoading || isFetching) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }

    const handleEdit = ({ props }: ItemParams) => {
      navigate(`/main/documents/${props.id}/edit`);
    };
    const handleViewPdf = ({ props }: ItemParams) => {
      const url = 'https://pdf-lib.js.org/assets/with_cropbox.pdf'
      window.open(`/pdf-viewer?file=${url}`, '_blank');
    };

    function renderNestedTable<T extends DocumentTabKey>(tabKey: T, documents: DocumentDTO[], title: string){
        const nestedData = documents.map((d) => d[tabKey]) as TabToDTOMap[T][];
        const columns = documentColumnMap[tabKey] as ColumnDef<TabToDTOMap[T], any>[];

        const basicData = documents.map((d) => ({
            id: d.id,
            mainId: d.mainId
        }));

        const contextMenu = [
          {label: 'Cập nhật thông tin', handle: handleEdit},
          {label: 'Chỉnh sửa file', handle: handleViewPdf}
        ]

        return (
            <ListTable<BasicDocumentInfo, TabToDTOMap[T]>
                title={`Bảng: ${title}`}
                slug={`documents`}
                contextMenu={contextMenu}
                basicData={basicData}
                basicListColumns={documentBasicColumns}
                nestedData={nestedData}
                nestedColumns={columns}
            />
        )
    }

    const handleTabChange = (tabName: string) => {
        setCurrentTab(tabName as DocumentTabKey);
      };

    return (
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Danh sách tài liệu</h2>
            <button
              className="btn btn-primary flex items-center gap-2"
              onClick={() => navigate('/main/documents/add')}
            >
              <FaPlus /> Thêm tài liệu
            </button>
          </div>
    
          <SwitchBar tabs={documentTabs} onTabChange={handleTabChange} initialTab={currentTab} />
    
          {renderNestedTable(
            currentTab,
            documents,
            documentTabs.find((tab) => tab.name === currentTab)?.label || 'N/A'
          )}
        </div>
      );
}