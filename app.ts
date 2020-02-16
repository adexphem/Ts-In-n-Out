function add(n1: number, n2: number) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Invalid Input type');
  // }
  return n1 + n2;
}

const number1 = 5.3;
const number2 = 4;

const result = add(number1, number2);
console.log(result);