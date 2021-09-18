import Layout from "../../components/Layout";
import market from "./market.module.scss";
import CryptoList from "../../components/cryptolist";

const Market = () => {
  return (
    <Layout>
      <div className={market.main__table}>
        <table>
          <caption>Cryptocurrencies</caption>
          <thead>
            <tr>
              <th style={{ width: 10 + "vw" }}>Name</th>
              <th style={{ width: 120 + "px" }}>Price</th>
              <th style={{ width: 120 + "px" }}>24h %</th>
              <th style={{ width: 100 + "px" }}>7d %</th>
              <th style={{ width: 120 + "px" }}>Last 7 Days</th>
            </tr>
          </thead>
          <CryptoList />
        </table>
      </div>
    </Layout>
  );
};

export default Market;
