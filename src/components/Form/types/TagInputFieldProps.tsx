import { Tag } from "react-tag-autocomplete";

export default interface TagInputFieldProps {
    name: string;
    suggestions: any[],
    initData?: Tag[],
    allowNew: boolean,
}