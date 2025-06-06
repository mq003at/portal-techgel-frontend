import { useFormikContext } from "formik";
import { CreateGeneralWorkflowDTO } from "../../DTOs/GeneralWorkflowDTO";
import InputField from "../../../../../components/Form/InputField";
import { generalInfoFields } from "../../config/sharedProps";

export default function GeneralInfoSection() {
    useFormikContext<CreateGeneralWorkflowDTO>();

    return (
        <div className="grid grid-cols-2 gap-6">
            {generalInfoFields.map((field) => (
                <InputField key={field.name} {...field} name={`generalInfo.${field.name}`} />
            ))}
        </div>
    )
}