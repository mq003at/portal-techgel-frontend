import { useEffect, useState } from 'react';
import OrganizationViewPage from './OrganizationViewPage';
import { useNavigate, Routes, Route } from 'react-router';
// import AddOrEditOrganizationEntityPage from './AddOrEditOrganizationEntityPage';
import { FaPlus } from 'react-icons/fa';
import { useGetOrganizationEntitiesQuery } from '../api/OrganizationEntityApi';

export default function OrganizationPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModal, setIsEditModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Cơ cấu tổ chức</h1>

        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => setIsAddModalOpen(true)}
        >
          <FaPlus /> Thêm đơn vị
        </button>
      </div>

      {<OrganizationViewPage />}

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            {/* <AddOrEditOrganizationEntityPage onClose={() => setIsAddModalOpen(false)} /> */}
          </div>
        </div>
      )}
    </div>
  );
}
