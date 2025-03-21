export const cleanObject = (obj: Record<string, any>): Record<string, any> => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== null && value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);
  };