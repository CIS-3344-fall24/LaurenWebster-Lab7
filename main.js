import { add, subtract } from './namedOperations.js';

import multiply from './defaultOperations.js';

const num1 = 10;
const num2 = 5;

console.log(`Adding: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtracting: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplying: ${num1} * ${num2} = ${multiply(num1, num2)}`);
