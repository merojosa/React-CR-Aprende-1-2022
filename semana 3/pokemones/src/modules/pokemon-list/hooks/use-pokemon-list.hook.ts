import axios from "axios";
import React, { useCallback } from "react";
import { REST_URLS } from "../../../shared/constants";

interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

const usePokemonList = () => {
  const [pokemons, setPokemons] = React.useState([] as string[]);
  const [pokemonsBackup, setPokemonsBackup] = React.useState([] as string[]);
  const [loading, setLoading] = React.useState(false);

  const [next, setNext] = React.useState<string | null>(null);
  const [previous, setPrevious] = React.useState<string | null>(null);

  const getPokemonsAPI = (url: string) => {
    setLoading(true);
    axios
      .get<PokemonList>(url)
      .then((response) => {
        const mappedPokemnos = response.data.results.map(({ name }) => name);
        setPokemons(mappedPokemnos);
        setPokemonsBackup(mappedPokemnos);
        setPrevious(response.data.previous);
        setNext(response.data.next);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value.toString();

      if (text) {
        const newPokemons = pokemons.filter((pokemon) =>
          pokemon.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setPokemons(newPokemons);
      } else {
        setPokemons(pokemonsBackup);
      }
    },
    [pokemons, pokemonsBackup]
  );

  const onNext = useCallback(() => {
    if (next) {
      getPokemonsAPI(next);
    }
  }, [next]);

  const onPrevious = useCallback(() => {
    if (previous) {
      getPokemonsAPI(previous);
    }
  }, [previous]);

  React.useEffect(() => {
    getPokemonsAPI(REST_URLS.pokemonList);
  }, []);

  return { pokemons, onSearch, onNext, onPrevious, loading } as const;
};

export default usePokemonList;
