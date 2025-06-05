// import React, { Fragment, useEffect, useMemo, useState } from 'react';
// import { FileUploader } from '../../../../components/FileDragAndDrop/FileUploader';
// import {
//   fileTypeRule,
//   maxSizeRule,
//   imageDimensionRule,
// } from '../../../../components/FileDragAndDrop/HelperValidationRules';
// import { useNavigate } from 'react-router';
// import { Form, Formik } from 'formik';
// import { CreateSignatureDTO, SignatureDTO } from '../DTOs/SignatureDTO';
// import { useCreateSignatureMutation, useGetSignatureByEmployeeIdQuery, useGetSignaturesQuery } from '../api/SignatureApi';
// import { toast } from 'react-toastify';
// import { signatureFormInitialValues } from '../DTOs/signatureFormInitialValues';
// import InputField from '../../../../components/Form/InputField';
// import { Column, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, RowData, SortingState, useReactTable } from '@tanstack/react-table';
// import { useContextMenu } from 'react-contexify';
// import { signatureImageColumns } from '../table/columns/signatureImageColumns';
// import { useAppSelector } from '../../../../hooks/reduxHooks';
// import { v4 as uuidv4 } from 'uuid';

// export default function SignatureManagerImageSignaturePage() {
//   const { user } = useAppSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const { data, isLoading, isFetching } = useGetSignatureByEmployeeIdQuery(
//     user?.id?.toString() ?? '',
//     { skip: !user?.id }
//   );

//   useEffect(() => {
//     if (!user || !user.id) {
//       navigate('');
//     }
//   }, [user, navigate]);

//   const signatures: SignatureDTO[] = data ? [data] : [];

//   const table = useReactTable({
//     data: signatures,
//     columns: signatureImageColumns,
//     getCoreRowModel: getCoreRowModel()
//   });

//   if (isLoading || isFetching) {
//       return (
//           <div className="flex items-center justify-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
//           </div>
//       );
//   }

//   return (
//     <div className="flex flex-col gap-5">
//       <div className="flex justify-end items-center">
//         <button className="btn btn-primary" onClick={() => navigate('/main/signature-manager/create-signature-image')}>Tạo chữ ký</button>
//       </div>

//       <div className="overflow-x-auto rounded-lg border bg-white shadow">
//         <table className="table border-separate border-spacing-0 w-full">
//           <thead className="bg-gray-100 text-sm font-medium">
//             <tr>
//               {table.getHeaderGroups().map((hg) => (
//                 <Fragment key={hg.id}>
//                   {hg.headers.map((h, index) => (
//                     <th
//                       key={index}
//                       className={`px-4 py-2 text-left bg-base-200`}
//                     >
//                       {flexRender(h.column.columnDef.header, h.getContext())}
//                     </th>
//                   ))}
//                 </Fragment>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr
//                 key={row.id}
//                 className="group"
//               >
//                 {row.getVisibleCells().map((cell, index) => (
//                   <td
//                     key={cell.id}
//                     className="px-4 py-2 min-w-25 bg-white border-t group-hover:!bg-gray-100"
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useGetSignatureByEmployeeIdQuery } from '../api/SignatureApi';
import { useAppSelector } from '../../../../hooks/reduxHooks';

export default function SignatureManagerImageSignaturePage() {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const { data, isLoading, isFetching } = useGetSignatureByEmployeeIdQuery(
    user?.id?.toString() ?? '',
    { skip: !user?.id }
  );

  useEffect(() => {
    if (!user?.id) navigate('');
  }, [user, navigate]);

  if (isLoading || isFetching) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-10 w-10 text-indigo-600" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          <p className="text-indigo-600 font-medium">Đang tải chữ ký...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">Chữ ký của bạn</h1>
      </div>

      {!data && (
        <div className="text-center text-gray-500 mt-16">
          <p className="mb-4 text-lg">Chưa tạo chữ ký nào.</p>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow"
            onClick={() => navigate('/main/signature-manager/create-signature-image')}
          >
            Tạo chữ ký ngay
          </button>
        </div>
      )}

      {data && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-indigo-200 p-6 space-y-4">
          <h2 className="text-lg font-medium text-indigo-700 text-center">Chữ ký đã lưu</h2>
          
          <div className="w-full aspect-[3/1] bg-gray-50 border border-dashed border-gray-300 rounded-md flex items-center justify-center overflow-hidden">
            <img
              src={data.fileUrl}
              alt="Chữ ký của bạn"
              className="h-full object-contain"
            />
          </div>

          <p className="text-sm text-gray-600 text-center">
            Cập nhật gần nhất: {new Date(data.updatedAt || data.createdAt || '').toLocaleDateString()}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/main/signature-manager/create-signature-image')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow transition"
            >
              Cập nhật chữ ký
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
