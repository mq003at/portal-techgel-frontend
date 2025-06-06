import { FieldArray } from "formik";
import InputField from "../../../../../components/Form/InputField";
import { approvalNodesFields } from "../../config/sharedProps";

export function ApprovalNodesSection() {
  return (
    <FieldArray name="approvalNodes">
      {({ push, remove, form }) => (
        <div className="space-y-4">
          {form.values.approvalNodes.map((_: any, index: number) => (
            <div key={index} className="border p-4 rounded-md space-y-2">
                <div className="grid grid-cols-2 gap-6">
                    {approvalNodesFields.map((field) => (
                        <InputField key={field.name} {...field} name={`approvalNodes[${index}].${field.name}`} />
                    ))}
                </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={() => remove(index)}
                >
                  Xoá bước
                </button>
              </div>
            </div>
          ))}
          <div className="text-center">
            <button
                type="button"
                className="btn btn-secondary btn-md transition duration-300 hover:shadow-lg flex items-center gap-2"
                onClick={() =>
                    push({
                      name: '',
                      senderId: '',
                      receiverId: '',
                      approvalStatus: 'PENDING',
                    })
                }
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Thêm bước mới
                </button>

          </div>
        </div>
      )}
    </FieldArray>
  );
}
