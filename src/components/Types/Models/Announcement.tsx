import { BaseModel } from "./BaseModels";

export interface Announcement extends BaseModel {
  name: string;
  content: string;
  issuer: string;
}

export interface AnnouncementCategory extends BaseModel {
  name: string;
  description: string;
  announcements: Announcement[];
  level: number;
}
