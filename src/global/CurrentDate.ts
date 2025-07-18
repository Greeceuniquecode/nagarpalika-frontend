export function getNepalCurrentDate() {
  const now = new Date();

  // Convert to UTC
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);

  // Nepal offset: +5.75 hours => 345 minutes
  const nepalOffsetMinutes = 345;
  const nepalTime = new Date(utcTime + nepalOffsetMinutes * 60000);

  // Subtract one day for yesterday
  nepalTime.setDate(nepalTime.getDate() - 1);

  // Only keep date portion (year, month, day)
  return new Date(nepalTime.getFullYear(), nepalTime.getMonth(), nepalTime.getDate());
}
