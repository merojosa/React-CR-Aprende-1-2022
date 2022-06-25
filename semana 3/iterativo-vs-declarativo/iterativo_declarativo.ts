const phrase = "Hola como esta";
const words = ["car", "taxi", "bus", "bicycle"];
const foods = {
  breakfast: "Gallo Pinto",
  lunch: "Casado",
  dinner: "Pizza",
};

// PROGRAMACION ITERATIVA

let indexA = 0;
for (let i = 0; i < phrase.length; ++i) {
  if (phrase[i] === "a") {
    indexA = i;
    break;
  }
}
console.log(indexA);

let arrayBiggerWords = [] as string[];
for (let i = 0; i < words.length; ++i) {
  if (words[i].length >= 4) {
    arrayBiggerWords.push(words[i]);
  }
}
console.log(arrayBiggerWords);

let foodArray = [] as string[];
for (const food in foods) {
  foodArray.push(foods[food]);
}
console.log(foodArray);

// PROGRAMACION DECLARATIVA

const indexA_dec = phrase.search("a");
console.log(indexA_dec);

const arrayBiggerWords_dec = words.reduce((seed, currentValue) => {
  if (currentValue.length >= 4) {
    return [...seed, currentValue];
  }
  return seed;
}, [] as string[]);

console.log(arrayBiggerWords_dec);

// Otro ejemplo de reduce
const concWords = words.reduce((seed, currentValue) => {
  return `${seed}_${currentValue}`;
}, "");

console.log(concWords);

const foodArray_dec = Object.values(foods);
console.log(foodArray_dec);
