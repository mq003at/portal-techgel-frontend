import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../Form/InputField";
import { onSubmitEmployeeAddForm } from "../Form/EmployeeFormComponents";
import { personalInfoFields, employmentInfoFields } from "./sharedProps";

export default function EmployeeAddForm({ onClose }: { onClose: () => void }) {
  return (
    <Formik
      initialValues={{
        mainID: "",
        lastName: "",
        middleName: "",
        firstName: "",
        gender: "Male",
        dateOfBirth: "",
        personalEmail: "",
        companyEmail: "",
        phoneNumber: "",
        companyNumber: "",
        probationStartDate: "",
        probationEndDate: "",
        startDate: "",
        endDate: "",
        position: "",
        employmentStatus: "Inactive",
      }}
      validationSchema={Yup.object({
        lastName: Yup.string().required("Họ là bắt buộc"),
        firstName: Yup.string().required("Tên là bắt buộc"),
        dateOfBirth: Yup.date().required("Ngày sinh là bắt buộc"),
        personalEmail: Yup.string().email("Email không hợp lệ"),
        companyEmail: Yup.string().email("Email công ty không hợp lệ"),
        phoneNumber: Yup.string().matches(
          /^[0-9]+$/,
          "Số điện thoại không hợp lệ"
        ),
        companyNumber: Yup.string().matches(
          /^[0-9]+$/,
          "Số điện thoại công ty không hợp lệ"
        ),
      })}
      onSubmit={(values, actions) => {
        onSubmitEmployeeAddForm(values, actions);
      }}
    >
      {({ handleSubmit, values }) => (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 transition-transform duration-300 p-6">
          <div className="flex justify-between items-center border-b pb-2 mb-4 w-full">
            {/* Name (Centered in Flex Grow) */}
            <div className="flex-1 text-center">
              <h2 className="text-xl font-bold">
                {values.lastName} {values.middleName} {values.firstName}
              </h2>
            </div>

            {/* Close Button (Right-Aligned) */}
            <button
              type="button"
              onClick={onClose}
              className="btn btn-sm btn-circle"
            >
              ✕
            </button>
          </div>
          <Form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Left Column - Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Thông tin cá nhân</h3>
              {personalInfoFields.map((field) => (
                <InputField key={field.name} {...field} />
              ))}
            </div>

            {/* Right Column - Employment Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Thông tin nghiệp vụ
              </h3>
              {employmentInfoFields.map((field) => (
                <InputField key={field.name} {...field} />
              ))}
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="btn btn-success w-full"
                onClick={() => console.log("pressed")}
              >
                Lưu thông tin
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
