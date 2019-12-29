function makeNumber(str) {
  str = str
    .split("")
    .filter(e => !isNaN(+e))
    .join("");
  return str;
}

makeNumber("erer384jjjfd123");
