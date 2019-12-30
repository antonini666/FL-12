function isLeapYear(value) {
  let year = new Date(value).getFullYear();
  let isLeap = new Date(year, 1, 29).getMonth() === 1;
  if (isNaN(year)) {
    return "Invalid Date";
  }
  return isLeap ? `${year} is a leap year` : `${year} is not a leap year`;
}

isLeapYear("2020-01-01 00:00:00");
