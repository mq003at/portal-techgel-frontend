import IconWrapper from '../../../../components/wrapper/IconWrapper';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { safeNumber, safeString } from '../../../../utils/textUtils';
import FunctionalityBar from '../component/OrganizationTable/FunctionalityBar';

export default function OrganizationDetails() {
  const dispatch = useAppDispatch();

  //   const getEntityType = (entity: any): string => {
  //     const found = OrganizationEntityTypes.find(({ key }) => key in entity);
  //     return found?.label ?? DefaultEntityType;
  //   };

  //   const refreshOrganizationView = () => {
  //     dispatch(clearSelectedOrganizationEntity());
  //     dispatch(divisionApi.endpoints.getDivisions.initiate());
  //   };'

  const { selected } = useAppSelector((state) => state.selectedOrganizationEntity);
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-50 border rounded-md space-y-1">
        {selected ? (
          <>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-lg">{safeString(selected?.name)}</h2>
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
              <p>ID: {safeString(selected?.id)}</p>
              <p>Mã: {safeString(selected?.mainId)}</p>
              <p>Cấp: {safeNumber(selected?.level)}</p>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>Trạng thái: {safeString(selected?.status)}. </p>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>Người quản lý: {safeString(selected?.managerName)} </p>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>Mô tả: {safeString(selected?.description)} </p>
            </div>
          </>
        ) : (
          <p>Vui lòng chọn đơn vị tổ chức bên trái</p>
        )}
      </div>

      <FunctionalityBar resetButtonFunction={() => {}} />
      {/* <OrganizationTable /> */}
    </div>
  );
}
