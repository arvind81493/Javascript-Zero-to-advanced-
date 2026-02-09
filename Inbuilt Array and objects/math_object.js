console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518



 // Round objects


 console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.7)); // -5
console.log(Math.round(-4.4)); // -4


// ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.

console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(-4.7)); // -4
console.log(Math.ceil(-4.4)); // -4


// floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(-4.7)); // -5
console.log(Math.floor(-4.4)); // -5



// Random objects

console.log(Math.random()); 


//Min and Max objects

console.log(Math.min(4, 2, 8)); // 2
console.log(Math.max(4, 2, 8)); // 8


//pow() method returns the base to the exponent power, that is, base^exponent.

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(10, 0)); // 1

//returning the random integer between two bounds
//Lower bound =40
//Upper bound = 100

console.log(Math.floor(Math.random() * (100 - 40 + 1)) + 40); // Random integer between 40 and 100
