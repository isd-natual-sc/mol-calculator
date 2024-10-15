import { useContext } from "react";
import CalcCntForm from "./CalcCntForm";
import { TypeContext } from "../ClientRoot";
import { Material } from "@/utils/types";
import Manual from "@/components/common/Manual";
import Introduce from "@/components/common/Introduce";

export interface CalcClientProps {
  materials: Material[];
}

const CalcClient = (props: CalcClientProps) => {
  const type = useContext(TypeContext);

  switch (type) {
    case "root":
      return (
        <div className='flex flex-col justify-center items-center'>
          <Manual />
          <Introduce />
        </div>
      );

    case "mass":
      return <CalcCntForm {...{ labelText: "質量", type, ...props }} />;

    case "piece":
      return <CalcCntForm {...{ labelText: "個数", type, ...props }} />;

    case "volume":
      return <CalcCntForm {...{ labelText: "体積", type, ...props }} />;

    case "mol":
      return <CalcCntForm {...{ labelText: "物質量", type, ...props }} />;

    default:
      return (
        <h2 className='text-center text-xl m-2 p-3 font-medium'>
          404 Not Found
        </h2>
      );
  }
};

export default CalcClient;
