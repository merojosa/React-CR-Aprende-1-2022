import styled from "styled-components";

export const Root = styled.div`
  padding: 1rem 2rem;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 2rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LoadingContainer = styled.div`
  flex: 1;
`;
