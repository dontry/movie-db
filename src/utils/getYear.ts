export function getYear(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  return Number.isNaN(year) ? "N/A" : year;
}
