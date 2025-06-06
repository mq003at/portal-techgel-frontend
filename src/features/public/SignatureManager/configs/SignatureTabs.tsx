export type SignatureTabKey = 'eSignature' | 'imageSignature' | 'emailSignature';

export interface SignatureTab<T extends SignatureTabKey = SignatureTabKey> {
  name: T;
  label: string;
}

/**
 * Defines the available tabs for the Signature Management section.
 * Each tab has a unique key (`name`) and a display label.
 */
export const signatureTabs: SignatureTab[] = [
  { name: 'eSignature', label: 'Chữ ký Điện tử' },
  { name: 'imageSignature', label: 'Chữ ký Hình ảnh' },
  { name: 'emailSignature', label: 'Chữ ký Email' },
];
