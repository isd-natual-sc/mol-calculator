import { Props } from "@/types";
import CalcForm from "./CalcForm";

const CalcBody = ({ type }: Props) => {
  switch (type) {
    case "mass":
      return <CalcForm type={type} labelText='質量' />;

    case "piece":
      return <CalcForm type={type} labelText='個数' />;

    case "volume":
      return <CalcForm type={type} labelText='体積' />;

    case "mol":
      return <CalcForm type={type} labelText='物質量' />;

    default:
      return <div>404 Not Found</div>;
  }
};

export default CalcBody;
