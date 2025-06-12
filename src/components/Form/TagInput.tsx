import { useRef, useEffect, useState, useCallback } from 'react';
import { ReactTags, Tag } from 'react-tag-autocomplete';
import TagsInputFieldProps from './types/TagInputFieldProps';
import 'react-tag-autocomplete/example/src/styles.css';
import { useFormikContext, useField } from 'formik';

export const TagInput = ({ name, suggestions, initData, allowNew }: TagsInputFieldProps) => {
    const { setFieldValue } = useFormikContext<any>();
    const [field] = useField(name);
    const tagRef = useRef<any>(null);
    const [selected, setSelected] = useState<any[]>(field.value || []);

    useEffect(() => {
        if (initData && Array.isArray(initData) && initData.length > 0) {
            setSelected(initData);
            setFieldValue(name, initData.map((t) => t.value));
        }
    }, [initData, name, setFieldValue]);

    const onAdd = useCallback(
        (newTag: Tag) => {
            const updated = [...selected, newTag.value];
            setSelected(updated);
            setFieldValue(name, updated);
        },
        [selected, setFieldValue, name]
    );

    const onDelete = useCallback(
        (tagIndex: number) => {
            const updated = selected.filter((_, i) => i !== tagIndex);
            setSelected(updated);
            setFieldValue(name, updated);
        },
        [selected, setFieldValue, name]
    );


    const selectedTags: Tag[] = selected.map((val) => ({
        id: val,
        label: val,
        value: val,
    }));

    return (
        <ReactTags
            ref={tagRef}
            labelText=""
            selected={selectedTags}
            suggestions={suggestions}
            onAdd={onAdd}
            onDelete={onDelete}
            placeholderText=''
            allowNew={allowNew}
        />
    );
};
