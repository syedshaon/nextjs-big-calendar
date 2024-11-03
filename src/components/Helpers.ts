export function getWeekNumber(date: Date) {
  // Copy the date to avoid mutating the original date
  const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  
  // Set to the nearest Thursday: currentDate + 4 - currentDay (currentDay is zero-based)
  currentDate.setUTCDate(currentDate.getUTCDate() + 4 - (currentDate.getUTCDay() || 7));

  // Calculate January 1st of the current year
  const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1));

  // Calculate full weeks to nearest Thursday
  const weekNumber = Math.ceil(((currentDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

  return weekNumber;
}

export function getMonthRange(date: Date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get the first day of the month
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // Get the last day of the month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // Format the dates as desired
  const firstDayString = `${monthNames[firstDay.getMonth()]} ${firstDay.getDate()}, ${firstDay.getFullYear()}`;
  const lastDayString = `${monthNames[lastDay.getMonth()]} ${lastDay.getDate()}, ${lastDay.getFullYear()}`;

  return `${firstDayString} – ${lastDayString}`;
}

export function formatTimeTo12Hour(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}