const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide:  a / b
};

const simpleCalculate = (a, b, operation) => operation(a, b);

const selectedOperation = "divide";
console.log(simpleCalculate(6, 3, operations[selectedOperation]));
