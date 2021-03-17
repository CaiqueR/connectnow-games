export function transformDate(milliseconds: number) {
  const date = new Date(milliseconds)

  return `${date.getDate()}/${('0' + (date.getMonth() + 1)).slice(
    -2
  )}/${date.getFullYear()}`
}
