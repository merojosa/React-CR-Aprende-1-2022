import useGetData from "./hooks/use-get-data.hook";

const PokemonList = () => {
  const { pokemones } = useGetData();

  return (
    <div>
      {pokemones.map((value) => (
        <p key={value.name}>{value.name}</p>
      ))}
    </div>
  );
};

export default PokemonList;
