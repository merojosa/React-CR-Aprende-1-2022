import styled from "styled-components";

export const Button = styled.button<{ applyColor: boolean }>`
  border-color: ${({ applyColor }) => (applyColor ? "red" : "blue")};
`;
