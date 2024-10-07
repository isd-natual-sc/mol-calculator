import { Material, Props } from "@/types";
import CalcCntForm from "./CalcCntForm";

export interface CalcClientProps extends Props {
  materials: Material[];
}

const CalcClient = (props: CalcClientProps) => {
  switch (props.type) {
    case "mass":
      return <CalcCntForm {...{ labelText: "質量", ...props }} />;

    case "piece":
      return <CalcCntForm {...{ labelText: "個数", ...props }} />;

    case "volume":
      return <CalcCntForm {...{ labelText: "体積", ...props }} />;

    case "mol":
      return <CalcCntForm {...{ labelText: "物質量", ...props }} />;

    default:
      return (
        <h2 className='text-center text-xl m-2 p-3 font-medium'>
          404 Not Found
        </h2>
      );
  }
};

export default CalcClient;
