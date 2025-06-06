import { useEffect, useMemo, useRef } from 'react';
import IconWrapper from '../../../../components/Wrapper/IconWrapper';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { safeNumber, safeString } from '../../../../utils/textUtils';
import FunctionalityBar from '../component/OrganizationTable/FunctionalityBar';
import { CreateOrganizationEntityDTO, UpdateOrganizationEntityDTO } from '../DTOs/OrganizationEntityDTO';
import { organizationEntityApi, useGetOrganizationEntitiesQuery, useUpdateOrganizationEntityMutation } from '../api/OrganizationEntityApi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearSelectedOrganizationEntity } from '../store/selectedOrganizationEntitySlice';
import { OrganizationStatusOptions } from '../constants/OrganizationPageOptions';
import { OrganizationStatus } from '../configs/OrganizationModelOptions';

export default function OrganizationDetails() {
  //   const getEntityType = (entity: any): string => {
  //     const found = OrganizationEntityTypes.find(({ key }) => key in entity);
  //     return found?.label ?? DefaultEntityType;
  //   };

  //   const refreshOrganizationView = () => {
  //     dispatch(clearSelectedOrganizationEntity());
  //     dispatch(divisionApi.endpoints.getDivisions.initiate());
  //   };'

  const [updateOrganizationEntity, {isSuccess: isUpdateOrganizationSuccess}] = useUpdateOrganizationEntityMutation();
  const editModalRef = useRef<HTMLDialogElement>(null);
  const openEditModal = () => editModalRef.current?.showModal();
  const { selected: organizationEntityselected } = useAppSelector((state) => state.selectedOrganizationEntity);
  const { employees } = useAppSelector((state) => state.phoneBook);
  const dispatch = useAppDispatch();

  const manager = useMemo(() => {
    return employees?.find(e => e.id === organizationEntityselected?.managerId);
  }, [employees, organizationEntityselected?.managerId]);

  const handleEdit = async (formData: UpdateOrganizationEntityDTO) => {  
      formData.managerId === "" ? delete formData.managerId : undefined;
      formData.parentId === "" ? delete formData.parentId : undefined;

      let promise;
      const id = String(organizationEntityselected?.id ?? '');
      if(organizationEntityselected && 'id' in organizationEntityselected && organizationEntityselected.id){
        promise = updateOrganizationEntity({ id, data: formData }).unwrap();
      }else {
        return;
      }
  
      toast.promise(promise, {
        pending: 'Đang cập nhật đơn vị...',
        success: 'Cập nhật đơn vị thành công!',
        error: 'Cập nhật đơn vị thất bại. Vui lòng thử lại!',
      });
  
      try {
        await promise;
        dispatch(clearSelectedOrganizationEntity());
        editModalRef.current?.close();
      } catch (err) {
        console.error('Failed to create Organization:', err);
      }
    };

  
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-50 border rounded-md space-y-1">
        {organizationEntityselected ? (
          <>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-lg">{safeString(organizationEntityselected?.name)}</h2>
              {/* <button className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={openEditModal}>
                <IconWrapper
                  src="..\assets\icon\globalIcons\pencilSquare.svg"
                  title="Sửa đơn vị"
                  height={20}
                  width={20}
                />
              </button> */}
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>ID: {safeString(organizationEntityselected?.id)}</p>
              <p>Mã: {safeString(organizationEntityselected?.mainId)}</p>
              <p>Cấp: {safeNumber(organizationEntityselected?.level)}</p>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>Trạng thái: {safeString(OrganizationStatusOptions[organizationEntityselected?.status.toUpperCase() as OrganizationStatus].label)} </p>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>Người quản lý: {safeString(`${manager?.mainId} - ${manager?.firstName} ${manager?.middleName} ${manager?.lastName}`)} </p>
            </div>
            <div className="flex items-center gap-6 text-gray-600">
              <p>Mô tả: {safeString(organizationEntityselected?.description)} </p>
            </div>
          </>
        ) : (
          <p>Vui lòng chọn đơn vị tổ chức bên trái</p>
        )}
      </div>

      <FunctionalityBar resetButtonFunction={() => {}} />

      <dialog ref={editModalRef} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {/* <OrganizationEntityFormModal
              key={organizationEntityselected?.id ?? 'edit'}
              mode="edit"
              initialData={organizationEntityselected}
              onSubmit={(formData) => {
                void handleEdit(formData as UpdateOrganizationEntityDTO);
              }}
            /> */}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      {/* <OrganizationTable /> */}
    </div>
  );
}
