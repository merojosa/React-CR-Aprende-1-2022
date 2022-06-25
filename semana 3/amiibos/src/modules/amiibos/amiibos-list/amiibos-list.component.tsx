import AmiiboCard from "../amiibo-card/amiibo-card.component";
import { useStyles } from "./amiibos-list.styles";
import useGetAmiibos from "./hooks/use-get-amiibos.hook";

const AmiibosList = () => {
  const { list } = useStyles();
  const {
    amiibos,
    loadingAmiibos,
    onChange,
    counterAmiibos /*counterAmiibos2*/,
  } = useGetAmiibos();

  return (
    <>
      <p>{loadingAmiibos && "Cargando..."}</p>
      <p>Cantidad de amiibos: {counterAmiibos}</p>
      {/*<p>Cantidad de amiibos: {counterAmiibos2}</p>*/}
      <input placeholder="Buscar..." onChange={onChange} />
      <div className={list}>
        {amiibos.map(({ id, image, name }) => (
          <AmiiboCard key={id} name={name} imageUrl={image} />
        ))}
      </div>
    </>
  );
};

export default AmiibosList;
