const phrase = "Viva la Liga";

console.log(phrase.substring(0, 4));

console.log(phrase.includes("la Liga"));

if (phrase.includes("Saprissa")) {
  console.log("VERDAD");
} else {
  console.log("FALSE");
}

console.log(phrase.endsWith("Liga"));
console.log(phrase.endsWith("alajuela"));

const sele = phrase.replace("Liga", "Sele");
console.log(sele);

const template = `${sele} hoy y siempre`;
console.log(template);

console.log(phrase); // Cualquier función de string es inmutable
