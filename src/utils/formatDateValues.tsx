// export function formatDateValues(obj: any): any {
//   if (Array.isArray(obj)) {
//     return obj.map(formatDateValues);
//   }

//   if (typeof obj === 'object' && obj !== null) {
//     const result: Record<string, any> = {};
//     for (const key in obj) {
//       const value = obj[key];
//       if (
//         typeof value === 'string' &&
//         key.toLowerCase().includes('date') &&
//         !isNaN(Date.parse(value))
//       ) {
//         result[key] = new Date(value).toISOString().split('T')[0];
//       } else {
//         result[key] = formatDateValues(value);
//       }
//     }
//     return result;
//   }

//   return obj;
// }


export function formatDateValues(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(formatDateValues);
  }

  if (typeof obj === 'object' && obj !== null) {
    const result: Record<string, any> = {};
    for (const key in obj) {
      const value = obj[key];
      if (
        typeof value === 'string' &&
        !isNaN(Date.parse(value)) &&
        (key.toLowerCase().includes('date') || key.toLowerCase().includes('datetime'))
      ) {
        const date = new Date(value);
        if (key.toLowerCase().includes('datetime')) {
          // Format: YYYY-MM-DD HH:mm:ss
          const formatted = date.toISOString().replace('T', ' ').slice(0, 19);
          result[key] = formatted;
        } else {
          // Format: YYYY-MM-DD
          result[key] = date.toISOString().split('T')[0];
        }
      } else {
        result[key] = formatDateValues(value);
      }
    }
    return result;
  }

  return obj;
}
