import { Props } from "@/types";

const InputCard = ({ label, name, placeholder, width }: Props) => (
  <div className="p-2 m-2">
    <label className="text-xl font-medium">{label}</label>
    <input
      type="text"
      className="text-xl p-2 m-2 shadow"
      name={name}
      placeholder={placeholder}
      width={width}
    />
  </div>
);

export default InputCard;
