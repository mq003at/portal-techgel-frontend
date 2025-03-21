import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees @rest(type: "Employee", path: "employees") {
      id
      name
      position
      status
      email
    }
  }
`;
