import { useEffect } from "react";

import {
  AnnouncementCreateModalProps,
  announcementInputFields,
} from "./Form/sharedProps";
import InputField, { InputFieldProps } from "../Form/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../Form/TextField";

export default function AnnouncementCreateModal({
  onClose,
}: AnnouncementCreateModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const inputFields: InputFieldProps[] = announcementInputFields;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[900px] relative">
        <div className="m-2.5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-center flex-1">
            Tạo Thông Báo Mới
          </h2>
          <button onClick={onClose} className="btn btn-sm btn-circle">
            ✕
          </button>
        </div>

        <Formik
          initialValues={{
            name: "",
            issuer: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Bắt buộc"),
            issuer: Yup.string().required("Bắt buộc"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-4 flex flex-col">
              {inputFields.map((field) => (
                <InputField key={field.name} {...field} />
              ))}
              <TextField
                label="Nội dung"
                name="content"
                placeholder="Nhập nội dung chi tiết thông báo"
                required
              />

              <div className="text-center mt-6">
                <button type="submit" className="btn btn-success w-full">
                  Gửi thông báo
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
