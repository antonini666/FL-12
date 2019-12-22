let a = parseInt(prompt('Input value a'));
let b = parseInt(prompt('Input value b'));
let c = parseInt(prompt('Input value c'));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    console.log('Equilateral triangle');
  } else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
  } else {
    console.log('Scalene triangle');
  }
} else {
  alert('Triangle doesn’t exist');
}
