// utils/nepaliDigits.ts
export const toNepalidate = (input: string | number): string => {
  const digitsMap = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return input
    .toString()
    .split("")
    .map((char) => (/\d/.test(char) ? digitsMap[+char] : char))
    .join("");
};
