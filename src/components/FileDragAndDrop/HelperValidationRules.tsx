import { ValidationRule } from './FileUploader';

/** Enforce file.size ≤ maxBytes */
export function maxSizeRule(maxBytes: number, errorMsg: string): ValidationRule {
  return {
    name: 'maxSize',
    validate: (f) => f.size <= maxBytes,
    errorMessage: errorMsg,
  };
}

/** Enforce file.type matches one of the accept tokens */
export function fileTypeRule(accept: string, errorMsg: string): ValidationRule {
  const tokens = accept.split(',').map((t) => t.trim().toLowerCase());
  return {
    name: 'fileType',
    validate: (f) =>
      tokens.some((tok) => {
        if (tok.startsWith('.')) {
          return f.name.toLowerCase().endsWith(tok);
        }
        return f.type.toLowerCase() === tok;
      }),
    errorMessage: errorMsg,
  };
}

/** For PNG/JPG only: enforce image dimensions ≤ maxW×maxH */
export function imageDimensionRule(maxW: number, maxH: number, errorMsg: string): ValidationRule {
  return {
    name: 'imageDimensions',
    validate: (f) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.src = URL.createObjectURL(f);
        img.onload = () => {
          URL.revokeObjectURL(img.src);
          resolve(img.naturalWidth <= maxW && img.naturalHeight <= maxH);
        };
        img.onerror = () => resolve(false);
      }),
    errorMessage: errorMsg,
  };
}
