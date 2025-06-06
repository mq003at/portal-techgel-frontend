// import OrganizationDetail from '../component/OrganizationTable/OrganizationDetail';
import { useState } from 'react';
import OrganizationTree from '../component/OrganizationTree';
import OrganizationDetails from './OrganizationDetails';

export default function OrganizationViewPage() {
  return (
    <div className="border rounded-xl p-4 bg-white flex">
      <div className="w-[300px] pr-4 border-r border-gray-200">
        <OrganizationTree />
      </div>
      <div className="flex-1 pl-4">
        <OrganizationDetails />
      </div>
    </div>
  );
}
