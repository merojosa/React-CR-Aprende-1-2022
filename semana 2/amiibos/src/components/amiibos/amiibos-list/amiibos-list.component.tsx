import useGetAmiibos from "./hooks/use-get-amiibos.hook";

const AmiibosList = () => {
  const { amiibos, loadingAmiibos } = useGetAmiibos();

  return (
    <>
      {loadingAmiibos && "Cargando..."}
      {amiibos.map(({ id, image, name }) => (
        <div key={id}>
          <div>{name}</div>
          <img src={image} alt={`Imagen amiibo: ${name}`} />
        </div>
      ))}
    </>
  );
};

export default AmiibosList;
