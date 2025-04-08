import OrganizationEntityForm from '../forms/AddOrganizationEntityForm';

interface Props {
  onClose: () => void;
}

export default function AddOrEditOrganizationEntityPage({ onClose }: Props) {
  return (
    <div className="max-w-md mx-auto p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-4 self-center">Thêm đơn vị mới</h2>
      <OrganizationEntityForm onClose={onClose} />
    </div>
  );
}
