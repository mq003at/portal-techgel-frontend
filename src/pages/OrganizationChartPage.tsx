import OrganizationChart from "../components/OrganizationChart/OrganizationChart";

export function OrganizationChartPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-3/4 border border-gray-300">
        <OrganizationChart />
      </div>
    </div>
  );
}
