import { useEffect } from "react";

import { IStaticMethods } from "flyonui/flyonui";
import { Route, Routes, useLocation } from "react-router";
import pkg from "../package.json";
import LoginPage from "./features/public/LoginPage/pages/LoginPage";
import Body from "./pages/Body";
import { PDFPage } from "./features/public/DocumentsManagement/tables/PdfViewer";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./features/public/Organization/store/loginSlice";
import { EmployeeDTO } from "./features/restricted/EmployeeList/DTOs/EmployeeDTO";
import { useGetEmployeesQuery } from "./features/restricted/EmployeeList/api/employeeListApi";
import { createPhoneBook } from "./features/restricted/EmployeeList/store/EmployeesSlice";
import { PhoneBookDTO } from "./features/restricted/EmployeeList/DTOs/PhoneBookDTO";

console.log("DaisyUI version:", (pkg.dependencies as any)["daisyui"]);

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const userJson = localStorage.getItem('user');
  const {data: employees} = useGetEmployeesQuery();
  const user: EmployeeDTO | null = userJson ? JSON.parse(userJson) : null;
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);

  function convertEmployeeToPhoneBook(employee: EmployeeDTO): PhoneBookDTO {
    return {
      id: employee.id,
      mainId: employee.mainId,
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
    };
  }

  function convertEmployeesToPhoneBookList(employees: EmployeeDTO[]): PhoneBookDTO[] {
    return employees.map(convertEmployeeToPhoneBook);
  }

  useEffect(() => {
    if(user) {
      dispatch(loginSuccess({ user }));
    }

    if (employees) {
      dispatch(createPhoneBook({ employees: convertEmployeesToPhoneBookList(employees) }));
    }

    // if (isError) {
    //   dispatch(logout());
    //   localStorage.removeItem('token');
    // }
  }, [dispatch, employees]);

  return (
    <div className="min-h-screen bg-base-200/60">
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main/*" element={<Body />} />
          <Route path="/pdf-viewer" element={<PDFPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
