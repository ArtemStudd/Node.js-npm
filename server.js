import { add, subtract } from "./math.js";

const resultAdd = add(2, 3);
console.log(`Результат сложения: ${resultAdd}`);

const resultSubtract = subtract(5, 2);
console.log(`Результат вычитания: ${resultSubtract}`);

const math = require("./math.js");

const resultAdd2 = math.add(2, 3);
console.log(`Результат сложения (через require): ${resultAdd2}`);

const resultSubtract2 = math.subtract(5, 2);
console.log(`Результат вычитания (через require): ${resultSubtract2}`);
