import { useEffect, useRef, useState } from 'react';
import OrganizationViewPage from './OrganizationViewPage';
import { useNavigate, Routes, Route } from 'react-router';
// import AddOrEditOrganizationEntityPage from './AddOrEditOrganizationEntityPage';
import { FaPlus } from 'react-icons/fa';
import { useCreateOrganizationEntityMutation, useGetOrganizationEntitiesQuery } from '../api/OrganizationEntityApi';
import { CreateOrganizationEntityDTO, UpdateOrganizationEntityDTO } from '../DTOs/OrganizationEntityDTO';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { useGetEmployeesQuery } from '../../../restricted/EmployeeList/api/employeeListApi';

export default function OrganizationPage() {
  const addModalRef = useRef<HTMLDialogElement>(null);
  const [createOrganizationEntity] = useCreateOrganizationEntityMutation();
  const organizationEntityselected = useAppSelector((state) => state.selectedOrganizationEntity.selected);

  const openAddModal = () => addModalRef.current?.showModal();

  const handleAdd = async (formData: CreateOrganizationEntityDTO) => {
    formData.level = (organizationEntityselected && 'level' in organizationEntityselected) ? organizationEntityselected.level + 1 : 1;
    formData.parentId = (organizationEntityselected && 'parentId' in organizationEntityselected) ? organizationEntityselected?.id?.toString() : "";

    formData.managerId === "" ? delete formData.managerId : undefined;
    formData.parentId === "" ? delete formData.parentId : undefined;

    const promise = createOrganizationEntity(formData).unwrap();

    toast.promise(promise, {
      pending: 'Đang tạo đơn vị...',
      success: 'Tạo đơn vị thành công!',
      error: 'Tạo đơn vị thất bại. Vui lòng thử lại!',
    });

    try {
      await promise;
      addModalRef.current?.close();
    } catch (err) {
      console.error('Failed to create Organization:', err);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Cơ cấu tổ chức</h1>

        {/* <button
          className="btn btn-primary flex items-center gap-2"
          onClick={openAddModal}
        >
          <FaPlus /> Thêm đơn vị
        </button> */}
      </div>

      {<OrganizationViewPage />}

      <dialog ref={addModalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {/* <OrganizationEntityFormModal
            key={organizationEntityselected?.id ?? 'new'}
            mode="add"
            onSubmit={(formData) => {
              void handleAdd(formData as CreateOrganizationEntityDTO);
            }}
          /> */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
