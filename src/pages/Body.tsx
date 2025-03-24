import { Routes, Route, Navigate } from "react-router";
import ServiceBar from "../components/NaviBar/ServiceBar/ServiceBar";
import EmployeeListPage from "./EmployeeListPage";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphql/apolloClient";
import { OrganizationChartPage } from "./OrganizationChartPage";
import RoleServiceBar from "../components/NaviBar/RoleBar.tsx/RoleServiceBar";
import AnnouncementPage from "./AnnouncementPage";
import { useState } from "react";
import GeneralPage from "./GeneralPage";

export default function Body() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <ApolloProvider client={client}>
      <div className="flex h-screen">
        <ServiceBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div
          className={`flex-1 p-6 bg-base-100 ${isExpanded ? "ml-50" : "ml-20"}`}
        >
          <RoleServiceBar />
          <Routes>
            <Route path="/" element={<Navigate to="/announcement" />} />
            <Route path="/announcement" element={<AnnouncementPage />} />
            <Route path="/employees" element={<EmployeeListPage />} />{" "}
            <Route path="/general" element={<GeneralPage />} />
            <Route path="/organization" element={<OrganizationChartPage />} />
            <Route path="*" element={<Navigate to="/general" />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}
