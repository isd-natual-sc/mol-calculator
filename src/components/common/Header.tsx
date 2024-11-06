import { TITLE } from "@/utils/global";
import LinkListRSC from "../ssr/LinkListRSC";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center shadow w-fit mx-auto my-2">
      <h1 className="text-3xl font-semibold p-3">{TITLE}</h1>
      <LinkListRSC />
    </header>
  );
};

export default Header;
