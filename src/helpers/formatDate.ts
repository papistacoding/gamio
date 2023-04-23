export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const suffix = getDaySuffix(day);
  const monthName = monthNames[date.getMonth()];

  return `${monthName.toUpperCase()} ${day}${suffix}`;
};

const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return "TH";
  }
  switch (day % 10) {
    case 1:
      return "ST";
    case 2:
      return "ND";
    case 3:
      return "RD";
    default:
      return "TH";
  }
};
