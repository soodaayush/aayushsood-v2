// "August 10, 2026" -> "August 2026". The date string is parsed and formatted in the same timezone, so the month can't shift.
export function formatMonthYear(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
