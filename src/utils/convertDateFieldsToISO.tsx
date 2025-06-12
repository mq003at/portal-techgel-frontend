// export function convertDateFieldsToISO<T extends Record<string, any>>(obj: T): T {
//   const newObj: Record<string, any> = Array.isArray(obj) ? [] : {};

//   for (const key in obj) {
//     const value = obj[key];

//     if (value === null || value === undefined) {
//       newObj[key] = value;
//     } else if (typeof value === 'object' && value !== null && (value as Date) instanceof Date) {
//       // ✅ Trường hợp object Date thật sự
//       newObj[key] = value.toISOString();
//     } else if (typeof value === 'object') {
//       // ✅ Duyệt đệ quy cho object hoặc array
//       newObj[key] = convertDateFieldsToISO(value);
//     } else {
//       newObj[key] = value;
//     }
//   }

//   return newObj as T;
// }


export function convertDateFieldsToISO<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(convertDateFieldsToISO) as T;
  }

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const isDateKey = (key: string): boolean => {
    const lower = key.toLowerCase();
    return (
      lower.includes('date') ||
      lower.endsWith('at') ||
      lower.endsWith('time') ||
      lower.includes('dob') // thêm nếu cần
    );
  };

  const newObj: Record<string, any> = {};

  for (const key in obj) {
    const value = (obj as any)[key];

    if (
      typeof value === 'string' &&
      isDateKey(key) &&
      !isNaN(Date.parse(value))
    ) {
      newObj[key] = new Date(value).toISOString();
    } else if (typeof value === 'object' && value !== null) {
      newObj[key] = convertDateFieldsToISO(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj as T;
}

