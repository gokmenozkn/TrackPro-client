import item from "./item.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IImage, ISparkline } from "../../types";
import { Area, AreaChart, LineChart, Line, ResponsiveContainer } from "recharts";
import Chart from "../chart";

type Props = {
  id: string;
  name: string;
  price: number | string;
  image: IImage;
  change_24h: number | string;
  change_7d: number | string;
  sparkline_7d: ISparkline;
};

interface IChartData {
  name?: string;
  uv?: number;
  pv?: number;
  amt?: number;
  value?: number;
}

function CryptoListItem({
  id,
  name,
  price,
  image,
  change_24h,
  change_7d,
  sparkline_7d,
}: Props) {
  const prices = sparkline_7d.price;
  // const [chartData, setChartData] = useState<IChartData[]>([]);

  return (
    <tr>
      <td id={item.coin}>
        <div className={item.currency}>
          <div className={item.currency__logo}>
            {/* <img src="/icons/eth-logo.png" alt="bitcoin" /> */}
            <img src={image.small} alt="bitcoin" />
          </div>
          <div className={item.currency__name}>
            <p>{name}</p>
          </div>
        </div>
      </td>
      <td id={item.price}>${price}</td>
      <td>{change_24h}%</td>
      <td>{change_7d}%</td>
      <td>
        <div className={item.chart}>
          <Chart data={prices} />
        </div>
      </td>
    </tr>
  );
}

export default CryptoListItem;
