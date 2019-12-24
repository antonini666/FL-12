let a = parseFloat(prompt('Input value a'));
let b = parseFloat(prompt('Input value b'));
let c = parseFloat(prompt('Input value c'));
let d, x, x1, x2;
let two = 2;
let four = 4;

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  console.log('Invalid input data');
} else {
  d = Math.pow(b, two) - four * a * c;
  if (d === 0) {
    x = -b / (two * a);
    console.log(`x = ${x}`);
  } else if (d > 0) {
    x1 = Math.round((-b + Math.sqrt(d)) / (two * a));
    x2 = Math.round((-b - Math.sqrt(d)) / (two * a));
    console.log(`x1 = ${x1}`, `x2 = ${x2}`);
  } else if (d < 0) {
    console.log('no solution');
  }
}
