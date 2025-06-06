import { Routes, Route, Navigate } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import client from '../../graphql/apolloClient';
import { useState } from 'react';

import GeneralPage from '../features/public/General/pages/GeneralPage';
import ServiceBar from '../features/public/NaviBar/ServiceBar/pages/ServiceBar';
import { EmployeeListPage } from '../features/restricted/EmployeeList/pages/EmployeeListPage';
import AdvancedServiceBar from '../features/public/NaviBar/AdvancedServiceBar/AdvancedServiceBar';
import OrganizationPage from '../features/public/Organization/pages/OrganizationPage';
import { EmployeeListAddPage } from '../features/restricted/EmployeeList/pages/EmployeeListAddPage';
import { EmployeeListEditPage } from '../features/restricted/EmployeeList/pages/EmployeeListEditPage';
import { BadgeGeneration } from '../components/badges/BadgeGeneration';
import { SignatureManagerPage } from '../features/public/SignatureManager/pages/SigatureManagerPage';
import DoucmentsManagementViewPage from '../features/public/DocumentsManagement/pages/DocumentsManagementViewPage';
import { DocumentsManagementAddPage } from '../features/public/DocumentsManagement/pages/DocumentsManagementAddPage';
import { DocumentsManagementEditPage } from '../features/public/DocumentsManagement/pages/DocumentsManagementEditPage';
import SignatureManagerCreateImageSignaturePage from '../features/public/SignatureManager/pages/SignatureManagerCreateImageSignaturePage';
import LeaveRequestWorkflowViewPage from '../features/public/GeneralWorkflow/pages/LeaveRequestWorkflowViewPage';
import LeaveRequestWorkflowViewStepsPage from '../features/public/GeneralWorkflow/pages/LeaveRequestWorkflowViewNodesPage';
import { LeaveRequestWorkflowAddPage } from '../features/public/GeneralWorkflow/pages/LeaveRequestWorkflowAddPage';
import { NavBarHeader } from '../features/public/NaviBar/ServiceBar/pages/NavBarHeader';

export default function Body() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  
  return (
    <ApolloProvider client={client}>
      <BadgeGeneration />

      <div className="flex h-screen">
        <ServiceBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className={`pt-0 flex-1 py-6 bg-base-100 ${isExpanded ? 'ml-80' : 'ml-35'}`}>
          <NavBarHeader />
          <Routes>
            <Route path="/" element={<Navigate to="/main/general" />} />

            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/employees/add" element={<EmployeeListAddPage />} />
            <Route path="/employees/:id/edit" element={<EmployeeListEditPage />} />

            <Route path="/general" element={<GeneralPage />} />

            <Route path="/organization" element={<OrganizationPage />} />
            {/* <Route path="/organization/add" element={<OrganizationAddPage />} />
            <Route path="/organization/:id/edit" element={<OrganizationEditPage />} /> */}

            {/* <Route path="*" element={<Navigate to="/main/general" />} /> */}
            
            <Route path="/documents" element={<DoucmentsManagementViewPage />} />
            <Route path="/documents/add" element={<DocumentsManagementAddPage />} />
            <Route path="/documents/:id" element={<DoucmentsManagementViewPage />} />
            <Route path="/documents/:id/edit" element={<DocumentsManagementEditPage />} />

            <Route path="/signature-manager" element={<SignatureManagerPage />} />
            <Route path="/signature-manager/create-signature-image" element={<SignatureManagerCreateImageSignaturePage />} />

            <Route path="/leave-request" element={<LeaveRequestWorkflowViewPage />} />
            <Route path="/leave-request/add" element={<LeaveRequestWorkflowAddPage />} />
            <Route path="/leave-request/:id/nodes" element={<LeaveRequestWorkflowViewStepsPage />} />

            <Route path="*" element={<Navigate to="/main/general" />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}
