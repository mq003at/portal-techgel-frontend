import { convertDateToISO } from "../components/misc/conversion";
import { BaseModel } from "../components/Types/Models/BaseModels";

export class BaseDTO {
  id: number = 0;
  mainID?: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(data: Partial<BaseModel>) {
    Object.assign(this, data);
    this.createdAt = convertDateToISO(data.createdAt);
    this.updatedAt = convertDateToISO(data.updatedAt);
  }
}
