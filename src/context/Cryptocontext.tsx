import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { IData } from "../types";

const defaultValue = {
  data: [] as IData[],
};

interface IContext {
  data: IData[];
}

const CryptoContext = createContext<IContext>(defaultValue);

export const useCryptoContext = () => useContext(CryptoContext);

const CryptoProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IData[]>([]);
  const url = "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${url}/currencies`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const value = {
    data,
  };
  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
};

export default CryptoProvider;
