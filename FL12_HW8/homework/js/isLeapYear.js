function isLeapYear(value) {
  let year = new Date(value).getFullYear();
  let isLeap = new Date(year, 1, 29).getMonth() === 1;
  if (isNaN(year)) {
    return "Invalid Date";
  } else if (isLeap) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

isLeapYear(1213131313);
