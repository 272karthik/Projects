const C = require('./test-module')

const calc1= new C();

console.log(calc1.add(2,9));

//exports 

const calc2 = require('./test-module2');
console.log(calc2.multiply(3,5));

