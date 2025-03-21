import { Routes, Route, Navigate } from "react-router";
import Announcement from "./Announcement";
import ServiceBar from "../components/NaviBar/ServiceBar/ServiceBar";
import EmployeeListPage from "./EmployeeListPage";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphql/apolloClient";
import { OrganizationChartPage } from "./OrganizationChartPage";

export default function Body() {
  return (
    <ApolloProvider client={client}>
      <div className="flex h-screen">
        <ServiceBar />
        <div className="flex-1 p-6 bg-base-100">
          <Routes>
            <Route path="/" element={<Navigate to="/announcement" />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/organization" element={<OrganizationChartPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}
