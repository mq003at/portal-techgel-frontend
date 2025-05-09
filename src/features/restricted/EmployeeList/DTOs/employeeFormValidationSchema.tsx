import * as Yup from 'yup';

export const employeeFormValidationSchema = Yup.object({
    lastName: Yup.string().required('Họ là bắt buộc'),
    firstName: Yup.string().required('Tên là bắt buộc'),
    personalInfo: Yup.object({
    personalPhoneNumber: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
        .required("Số điện thoại là bắt buộc"),  
    personalEmail: Yup.string().email("Email không hợp lệ")
        .required("Email là bắt buộc"),
    dateOfBirth: Yup.string().required('Ngày sinh là bắt buộc'),
    idCardNumber: Yup.string().required("CMND/CCCD là bắt buộc")
        .matches(/^\d{9}$|^\d{12}$/, 'Số CMND/CCCD không hợp lệ'),
    idCardExpiryDate: Yup.string().required("Ngày cấp là bắt buộc"),
    idCardIssueDate: Yup.string().required("Ngày hết hạn là bắt buộc")
        }),
    companyInfo: Yup.object({
    companyEmail: Yup.string().required('Email công ty là bắt buộc')
        .email('Email không hợp lệ'),
    companyPhoneNumber: Yup.string().required('Số điện thoại công ty là bắt buộc')
        .matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
    })
});
