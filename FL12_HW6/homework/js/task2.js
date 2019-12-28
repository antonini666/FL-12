let a = prompt('Enter value a', '');
let b = prompt('Enter value b', '');
let c = prompt('Enter value c', '');

if (
  a === null ||
  b === null ||
  c === null ||
  isNaN(+a) ||
  isNaN(+b) ||
  isNaN(+c) ||
  isNaN(parseInt(a)) ||
  isNaN(parseInt(b)) ||
  isNaN(parseInt(c))
) {
  alert('input values should be ONLY numbers');
} else {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  if (a <= 0 || b <= 0 || c <= 0) {
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
}
