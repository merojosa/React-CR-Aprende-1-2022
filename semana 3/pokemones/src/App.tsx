import React from "react";

import "./App.css";
import PokemonList from "./modules/pokemon-list/pokemon-list.component";
import CustomButton from "./shared/components/custom-button.component";

function App() {
  const handleOnClick = () => window.alert("A revisar Pokemones jiji");
  return (
    <>
      <CustomButton applyStyle={false} onClick={handleOnClick}>
        Bienvenid@
      </CustomButton>
      <PokemonList />
    </>
  );
}

export default App;
