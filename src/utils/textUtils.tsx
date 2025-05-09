/**
 * Returns a guaranteed non-null string.
 *
 * @param value - The string value that may be `null` or `undefined`.
 * @returns The original `value` if it's a non-null, non-undefined string; otherwise returns an empty string (`""`).
 *
 * @example
 * safeString("Hello");      // "Hello"
 * safeString(undefined);    // ""
 * safeString(null);         // ""
 * safeString("");           // ""
 */
export function safeString(value: string | null | undefined, placeholder?: string): string {
  return value ?? placeholder ?? '';
}

/**
 * Returns a guaranteed non-null number.
 *
 * @param value - The number value that may be `null` or `undefined`.
 * @returns The original `value` if it's a non-null, non-undefined number; otherwise returns `0`.
 *
 * @example
 * safeNumber(42);         // 42
 * safeNumber(undefined);  // 0
 * safeNumber(null);       // 0
 * safeNumber(0);          // 0
 */
export function safeNumber(value: number | null | undefined): number {
  return value ?? 0;
}
