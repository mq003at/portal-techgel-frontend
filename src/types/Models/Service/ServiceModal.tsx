import { JSX } from "react/jsx-runtime";

export interface ServiceItem {
  title: string;
  icon: JSX.Element;
  navigateTo: string;
}

export interface ServiceGroup {
  group: string;
  icon?: JSX.Element;
  items: ServiceItem[];
}
