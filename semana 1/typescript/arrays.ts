const animals = ["dog", "cat", "bird", "fish"];

console.log(animals.length);

// Funciones mutables

const animalsWithBear = animals.push("bear");
console.log(animalsWithBear);
console.log(animals);

const pop = animals.pop();
console.log(pop);
console.log(animals);

const animalStarting = animals.splice(2, 2);

console.log(animalStarting);
console.log(animals);

// Inmutables:

const newAnimals = [...animals, "duck", "dragon", "duck"];
console.log(newAnimals);

const fishFounded = newAnimals.find((value) => value === "fish");
console.log(fishFounded);

if (fishFounded) {
  console.log("HOLA");
}

const duckFounded = newAnimals.find((value) => value === "duck");
console.log(duckFounded);

const numbers = [1, 2, 3, 4];
const mappedArray = numbers.map((value) => value * 2);
console.log(mappedArray);
console.log(numbers);
