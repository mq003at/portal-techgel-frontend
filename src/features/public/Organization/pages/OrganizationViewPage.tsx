// import OrganizationDetail from '../component/OrganizationTable/OrganizationDetail';
import OrganizationTree from '../component/OrganizationTree';
import { useAppSelector } from '../../../../hooks/reduxHooks';

export default function OrganizationViewPage() {
  const selected = useAppSelector((state) => state.selectedOrganizationEntity.selected);

  return (
    <div className="border rounded-xl p-4 bg-white flex">
      <div className="w-[300px] pr-4 border-r border-gray-200">{/* <OrganizationTree /> */}</div>
      <div className="flex-1 pl-4">{/* <OrganizationDetail selected={selected} /> */}</div>
    </div>
  );
}
