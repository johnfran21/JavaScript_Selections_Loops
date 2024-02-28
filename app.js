console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }


// Exercise 2 Section
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  }
}

// Exercise 3 Section
// While Loop
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
//Do-While Loop
i = 1;
do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);
//FizzBuzz While Loop
i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
  i++;
}
//FizzBuzz Do-While Loop
i = 1;
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
  i++;
} while (i <= 100);
// //Exercise 4
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(`Checking for Random value: ${value} in range 0 to ${n}`);
let found = false;
for (let i = 1; i <= n; i++) {
  if (i === value) {
    found = true;
    console.log("Found value!");
    break;
  }
}
if (!found) {
  console.log("Did not find value");
}
//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
 n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`Fizz divisor: ${fizzDivisor}`);
console.log(`Buzz divisor: ${buzzDivisor}`);
console.log(`Range start: ${start}`);
console.log(`Range end: ${n}`);

for (let i = start; i <= n; i++) {
  let output = '';
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0){
    console.log(`${i} FIZZBUZZ`)
  } else if (i % fizzDivisor == 0){
    console.log(`${i} FIZZ`)
  } else if (i % buzzDivisor == 0)
  
  
  if (i % fizzDivisor === 0) {
    output += 'FIZZ';
  }
  else if (i % buzzDivisor === 0) {
    output += 'BUZZ';
  }
  console.log(output || i);
}