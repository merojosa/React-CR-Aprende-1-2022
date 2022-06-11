import axios from "axios";
import React from "react";

const API = "https://pokeapi.co/api/v2/pokemon";

type Pokemon = {
  name: string;
  url: string;
};

const useGetData = () => {
  const [pokemones, setPokemones] = React.useState<Pokemon[]>([
    { name: "Pikachú", url: "test" },
    { name: "Bulbasaur", url: "test" },
  ]);

  const getData = async () => {
    axios
      .get(API)
      .then((result) => {
        const pokemonesAPI = result.data.results;
        setPokemones(pokemonesAPI);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return { pokemones };
};

export default useGetData;
