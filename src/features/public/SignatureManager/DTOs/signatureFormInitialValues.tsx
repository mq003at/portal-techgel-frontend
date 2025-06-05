import { CreateSignatureDTO } from "./SignatureDTO";

export const signatureFormInitialValues: CreateSignatureDTO = {
  employeeId: '',
  file: new File([""], ""),
  fileName: '',
};
