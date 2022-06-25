import React from "react";

import * as Styled from "./custom-button.styles";

type CustomButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  applyStyle?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  applyStyle = true,
}) => {
  return (
    <Styled.Button applyColor={applyStyle} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default CustomButton;
