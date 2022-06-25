import React from "react";
import { useStyles } from "./amiibo-card.styles";

type AmiiboCardProps = {
  name: string;
  imageUrl: string;
};

const AmiiboCard: React.FC<AmiiboCardProps> = (props) => {
  const { card, title, image } = useStyles();

  return (
    <div className={card}>
      <div className={title}>{props.name}</div>
      <img
        className={image}
        src={props.imageUrl}
        alt={`Imagen amiibo: ${props.name}`}
      />
    </div>
  );
};
export default AmiiboCard;
