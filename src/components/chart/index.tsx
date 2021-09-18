import { Sparklines, SparklinesLine } from "react-sparklines";

type Props = {
  data: number[];
};

function Chart({ data }: Props) {
  return <Sparklines data={data}>
    <SparklinesLine color="blue" />
  </Sparklines>
}

export default Chart;
