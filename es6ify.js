
const hello = () => console.log('Hello, World!');

const sayHi = name => console.log(`Hi ${name}!`);

const multiplyByTen = a => a * 10;

const sum = (a, b) => a + b;
 
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) { 
        result *= base; 
    } 
    return result; 
};
