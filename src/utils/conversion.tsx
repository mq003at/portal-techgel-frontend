export const formatDate = (date: string) => {
  if (!date) return null;
  return new Date(date).toISOString().split("T")[0];
};

export function convertDateToISO(
  date?: string | Date | null
): string | undefined {
  return date ? new Date(date).toISOString() : undefined;
}

export function toUTCDate(date: string | Date | null | undefined): string {
  if (!date) return ""; // Handle empty/null values

  return new Date(date).toISOString();
}
export function formatDateToDDMMYYYY(dateString?: string | null): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
