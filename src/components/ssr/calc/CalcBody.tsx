import { Props } from "@/utils/types";
import CalcForm from "./CalcForm";

const CalcBody = ({ type }: Props) => {
  switch (type) {
    case "mass":
      return <CalcForm type={type} labelText='質量' units='g' />;

    case "piece":
      return <CalcForm type={type} labelText='個数' units='個' />;

    case "volume":
      return <CalcForm type={type} labelText='体積' units='L' />;

    case "mol":
      return <CalcForm type={type} labelText='物質量' units='mol' />;

    default:
      return <div>404 Not Found</div>;
  }
};

export default CalcBody;
