import axios from "axios";
import React from "react";

const AMIIBOS_URL = "https://www.amiiboapi.com/api/amiibo";

type AmiiboListAPI = {
  amiibo: {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    tail: string;
    type: string;
    release: {
      au: string;
      eu: string;
      jp: string;
      na: string;
    };
  }[];
};

type Amiibo = {
  id: string;
  name: string;
  image: string;
};

const useGetAmiibos = () => {
  const [amiibos, setAmiibos] = React.useState([] as Amiibo[]);
  const [loadingAmiibos, setLoadingAmiibos] = React.useState(true);

  const getAmiibos = async () => {
    setLoadingAmiibos(true);
    try {
      const response = await axios.get<AmiiboListAPI>(AMIIBOS_URL);
      const amiibosResponse = response.data.amiibo.map<Amiibo>((value) => ({
        id: `${value.head}${value.tail}`,
        image: value.image,
        name: value.name,
      }));
      setAmiibos(amiibosResponse);
    } catch {
      setAmiibos([]);
    } finally {
      setLoadingAmiibos(false);
    }
  };

  React.useEffect(() => {
    getAmiibos();
  }, []);

  return { amiibos, loadingAmiibos } as const;
};

export default useGetAmiibos;
