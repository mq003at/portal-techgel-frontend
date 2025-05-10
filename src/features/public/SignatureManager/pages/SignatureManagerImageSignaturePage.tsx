import React from 'react';
import { FileUploader } from '../../../../components/FileDragAndDrop/FileUploader';
import {
  fileTypeRule,
  maxSizeRule,
  imageDimensionRule,
} from '../../../../components/FileDragAndDrop/HelperValidationRules';

export default function SignatureManagerImageSignaturePage() {
  return (
    <div>
      <FileUploader
        accept="image/png"
        validationRules={[
          fileTypeRule('image/png', 'Chỉ chấp nhận PNG.'),
          maxSizeRule(3 * 1024 * 1024, 'Kích thước tối đa 3MB.'),
          imageDimensionRule(1000, 1000, 'Kích thước tối đa 1000×1000px.'),
        ]}
        onFileValid={(file) => {
          console.log('will upload', file);
          // …do your upload…
        }}
        dropzoneText="Kéo thả ảnh PNG vào đây. Kích thước tối đa 3MB, 1000×1000px, và đã xóa phông nền đằng sau."
        buttonText="Chọn ảnh PNG…"
      />
    </div>
  );
}
