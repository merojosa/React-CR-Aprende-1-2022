import React from "react";
import CustomButton from "../../shared/components/custom-button.component";
import usePokemonList from "./hooks/use-pokemon-list.hook";
import Modal from "react-modal";

import * as Styled from "./pokenmon-list.styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PokemonList = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { pokemons, onSearch, onNext, onPrevious, loading } = usePokemonList();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Styled.Root>
        <input placeholder="Buscar pokemones" onChange={onSearch} />
        <Styled.ListContainer>
          {pokemons.map((pokemon) => (
            <Styled.PokemonCard key={pokemon} onClick={openModal}>
              {pokemon}
            </Styled.PokemonCard>
          ))}
        </Styled.ListContainer>
        <Styled.PaginationContainer>
          <Styled.LoadingContainer>
            {loading && "Cargando..."}
          </Styled.LoadingContainer>
          <CustomButton onClick={onPrevious}>{"<"}</CustomButton>
          <CustomButton onClick={onNext}>{">"}</CustomButton>
        </Styled.PaginationContainer>
      </Styled.Root>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Test
      </Modal>
    </>
  );
};

export default PokemonList;
