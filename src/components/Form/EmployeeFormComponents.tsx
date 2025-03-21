import { cleanObject } from "../misc/cleanData";
import { toUTCDate } from "../misc/conversion";
import axios from "axios";

export const onSubmitEmployeeAddForm = async (
  values: any,
  { setSubmitting, resetForm }: any
) => {
  console.log("press");
  const employeeData = cleanObject({
    mainID: values.mainID,
    firstName: values.firstName,
    lastName: values.lastName,
    middleName: values.middleName,
    gender: values.gender,
    phoneNumber: values.phoneNumber,
    companyNumber: values.companyNumber,
    dateOfBirth: toUTCDate(values.dateOfBirth),
    startDate: toUTCDate(values.startDate),
    endDate: toUTCDate(values.endDate),
    probationStartDate: toUTCDate(values.probationStart),
    probationEndDate: toUTCDate(values.probationEnd),
    personalEmail: values.personalEmail,
    companyEmail: values.companyEmail,
    status: values.employmentStatus,
    position: values.position,
    address: values.address,
    salary: values.salary,
  });
  console.log("Submitting Employee Data:", employeeData);

  try {
    const response = await axios.post(
      "https://localhost:7188/api/employees",
      employeeData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 201) {
      alert("Employee added successfully!");
      resetForm();
    }
  } catch (error) {
    console.error("Error submitting employee data:", error);
    alert("Failed to add employee. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

export const onSubmitEmployeeEditForm = async (
  values: any,
  { setSubmitting }: any
) => {
  console.log("press");
  const employeeData = cleanObject({
    mainID: values.mainID,
    firstName: values.firstName,
    lastName: values.lastName,
    middleName: values.middleName,
    gender: values.gender,
    phoneNumber: values.phoneNumber,
    companyNumber: values.companyNumber,
    dateOfBirth: toUTCDate(values.dateOfBirth),
    startDate: toUTCDate(values.startDate),
    endDate: toUTCDate(values.endDate),
    probationStartDate: toUTCDate(values.probationStart),
    probationEndDate: toUTCDate(values.probationEnd),
    personalEmail: values.personalEmail,
    companyEmail: values.companyEmail,
    status: values.employmentStatus,
    position: values.position,
    address: values.address,
    salary: values.salary,
  });
  console.log("Editting Employee Data:", employeeData, values.id);

  try {
    const response = await axios.put(
      `https://localhost:7188/api/employees/${values.id}`,
      employeeData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      alert("✅ Employee updated successfully!");
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Error updating employee:", error);
    alert("⚠️ Failed to update employee. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

export const onSubmitEmployeeDelete = async (id: number) => {
  console.log("press delete");

  try {
    const response = await axios.delete(
      `https://localhost:7188/api/employees/${id}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      alert("✅ Employee deleted successfully!");
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Error deleting employee:", error);
    alert("⚠️ Failed to update employee. Please try again.");
  }
};
