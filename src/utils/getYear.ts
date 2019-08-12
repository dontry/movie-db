export function getYear(dateString: string) {
  const date = new Date(dateString);
  return date.getFullYear();
}
