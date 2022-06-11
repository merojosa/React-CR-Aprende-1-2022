let value = "jeje";
value = "Hola!";

const nombre = "Jose Andrés";

const tipo1 = true;

const myFunction = () => {
  return "Hola mundo";
};

const myFunction2 = (param: string) => {
  return "Hola mundo " + param;
};

function myNormalFunction(param: number) {
  return "Hola mundo 2" + param;
}

console.log(myFunction());
console.log(myNormalFunction(546541));
console.log(myFunction2("!!!!!"));

const myAdress = {
  province: "Alajuela",
  canton: "Central",
  district: "Desamparados",
  population: 564545,
  soccerTeam: {
    name: "La Gusanera",
    members: 18,
  },
};

const myAdressCopy = { ...myAdress };

console.log(myAdress);

myAdress.soccerTeam.name = "La Gusanera FC";

myAdress.province = "San José";
console.log(myAdress.province);
console.log(myAdressCopy.province);
console.log(myAdressCopy.soccerTeam);
