import axios from "axios";
import { announcementHandlers } from "./handlers/announcementHandlers";
import { setupWorker } from "msw/browser";

export const worker  = setupWorker(...announcementHandlers);

const sharedInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set to true if you need cookies or auth sessions
});

export default sharedInstance;
