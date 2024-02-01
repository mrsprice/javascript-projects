// let giraffe = {
//   species: "Reticulated Giraffe",
//   name: "Cynthia",
//   weight: 1500,
//   age: 15,
//   diet: "leaves",
// };

// for (item in giraffe) {
//   console.log(item + ", " + giraffe[item]);
// }

// let num = Math.floor(Math.random() * 10);

// console.log(num);
// let giraffe = {
//   species: "Reticulated Giraffe",
//   name: "Cynthia",
//   weight: 1500,
//   age: 15,
//   diet: "leaves",
// };

// function birthday(animal) {
//   animal.age = animal.age + 1;
//   return animal;
// }

// console.log(giraffe.age);

// birthday(giraffe);

// console.log(giraffe.age);

function randomSelection(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let happiness = [
  "Hope",
  "Joy",
  "Peace",
  "Love",
  "Kindness",
  "Puppies",
  "Kittens",
  "Tortoise",
];

for (i = 0; i < 8; i++) {
  console.log(randomSelection(happiness));
}
