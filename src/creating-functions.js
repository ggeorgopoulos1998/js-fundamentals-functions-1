// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function incrementByOne(number) {
  return number + 1;
}


// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalizeString(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function greetWithSmiley(name) {
  const capitalized = capitalizeString(name);
  return `Hi, ${capitalized} :)`;
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function countStringsInArray(dataArray) {
  let count = 0;
  for (const item of dataArray) {
    if (typeof item === 'string') {
      count++;
    }
  }
  return count;
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function addEdwardProperty(obj) {
  if (!obj.hasOwnProperty('edward')) {
    obj.edward = 'amazing';
  }
  return obj;
}



// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
   a: incrementByOne,
  b: capitalizeString,
  c: greetWithSmiley,    // 1. change undefined to be the name of the function you defined for the first TODO
  d: countStringsInArray, // 2. change undefined to be the name of the function you defined for the second TODO
  e: addEdwardProperty      //etc
  }
  
  
