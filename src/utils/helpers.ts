// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getKeyValue = (key: string) => (obj: Record<string, any>) =>
  obj[key]
