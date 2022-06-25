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
  const [amiibosInitial, setAmiibosInitial] = React.useState([] as Amiibo[]);
  const [loadingAmiibos, setLoadingAmiibos] = React.useState(true);

  // ¡Mas dolor!
  // const [counterAmiibos2, setCounterAmiibos2] = React.useState(amiibos.length);
  // memoized
  const counterAmiibos = React.useMemo(() => {
    return amiibos.length;
  }, [amiibos]);

  //React.useEffect(() => {
  //  setCounterAmiibos2(amiibos.length);
  // }, [amiibos]);

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
      setAmiibosInitial(amiibosResponse);
    } catch {
      setAmiibos([]);
    } finally {
      setLoadingAmiibos(false);
    }
  };

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value.toLowerCase();

      if (text) {
        const newAmiibos = amiibosInitial.filter(({ name }) => {
          return name.toLowerCase().includes(text);
        });
        setAmiibos(newAmiibos);
        return;
      }
      setAmiibos(amiibosInitial);
    },
    [amiibosInitial]
  );

  React.useEffect(() => {
    getAmiibos();
  }, []);

  return {
    amiibos,
    loadingAmiibos,
    onChange,
    counterAmiibos,
    // counterAmiibos2,
  } as const;
};

export default useGetAmiibos;
