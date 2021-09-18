import { useCryptoContext } from "../../context/Cryptocontext";
import CryptoListItem from "../cryptolistitem";

const CryptoList = () => {
  const { data } = useCryptoContext();

  return (
    <tbody>
      {data.length && data.map((item) => {
        const { id, name, symbol, image, market_data } = item;
        const price = market_data.current_price.usd;
        const { price_change_percentage_24h, price_change_percentage_7d, sparkline_7d } = market_data;
        
        return (
          <CryptoListItem
            key={id}
            name={name}
            id={id}
            price={price >= 1 ? price.toFixed(2) : price}
            image={image}
            sparkline_7d={sparkline_7d}
            change_24h={price_change_percentage_24h.toFixed(2)}
            change_7d={price_change_percentage_7d.toFixed(2)}
          />
        );
      })}
    </tbody>
  );
};

export default CryptoList;
