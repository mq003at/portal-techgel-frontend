import IconWrapper from '../../../../components/wrapper/IconWrapper';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import FunctionalityBar from '../component/OrganizationTable/FunctionalityBar';
import OrganizationTable from '../component/OrganizationTable/OrganizationTable';
import { OrganizationEntitySummaryDTO } from '../DTOs/OrganizationEntityDTO';
import { clearSelectedOrganizationEntity } from '../store/selectedOrganizationEntitySlice';

export default function OrganizationDetails() {
  const dispatch = useAppDispatch();

  //   const getEntityType = (entity: any): string => {
  //     const found = OrganizationEntityTypes.find(({ key }) => key in entity);
  //     return found?.label ?? DefaultEntityType;
  //   };

  //   const refreshOrganizationView = () => {
  //     dispatch(clearSelectedOrganizationEntity());
  //     dispatch(divisionApi.endpoints.getDivisions.initiate());
  //   };

  return (
    <div className="space-y-4">
      {/* {selected && (
        <div className="p-4 bg-gray-50 border rounded-md space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-lg">{selected.name}</h2>
            <button className="text-blue-500 hover:text-blue-700">
              <IconWrapper
                src="..\assets\icon\globalIcons\pencilSquare.svg"
                title="Sửa đơn vị"
                height={20}
                width={20}
              />
            </button>
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            <p>ID: {selected.id}</p>
            {'mainId' in selected && <p>Mã: {selected.mainId}</p>}
            <p>Loại: {getEntityType(selected)}</p>
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            <p>Trạng thái: {selected.status}. </p>
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            {'managerName' in selected && <p>Người quản lý: {selected.managerName} </p>}
          </div>
          <div className="flex items-center gap-6 text-gray-600">
            <p>Mô tả: {selected.description ?? 'Không có mô tả.'} </p>
          </div>
        </div>
      )} */}

      <FunctionalityBar resetButtonFunction={() => {}} />
      {/* <OrganizationTable /> */}
    </div>
  );
}
