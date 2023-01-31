export const filterObject = <T>(obj: T, filteredKey: string): Record<string, string> =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => key !== filteredKey));
