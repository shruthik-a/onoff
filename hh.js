//object 
let person = {
    name: "John",
    age: 30,
  };
  
  //array
  let numbers = [4, 7, 10, 15];
  
  let data = [
    {
      fruit: "Banana",
      vegetable: "Carrot",
    },
    {
      pet: "Cat",
      color: "black",
    },
  ];
  
  let organization = {
    dept: "Information Technology",
    year: 4,
  };
  
  // Function to calculate the sum of an array
  function calculateSum(arr) {
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    return sum;
  }
  
  // Using forEach to iterate through array elements
  numbers.forEach((element) => {
    console.log("Number:", element);
  });
  
  // Using for...in to iterate through array indices
  for (const index in numbers) {
    console.log("Index:", index);
  }
  
  // Using for...of to iterate through array elements
  for (const element of numbers) {
    console.log("Number:", element);
  }
  
  // Using Object.values to get values from an object
  const values = Object.values(person);
  for (const value of values) {
    console.log("Value:", value);
  }
  
  // Using Object.keys to get keys from an object
  const keys = Object.keys(person);
  for (const key of keys) {
    console.log("Key:", key);
  }
  
  // Iterating through an array of objects
  for (const item of data) {
    console.log("Data Item:", item);
  }
  
  // Call the calculateSum function
  const sum = calculateSum(numbers);
  console.log("Sum of Numbers:", sum);
  
  console.log("Organization:", organization);
  
  /*let fruits = ["Apple", "Banana", "Orange"];

  for (const fruit of fruits) {
    console.log(fruit);
  }*/
  
  