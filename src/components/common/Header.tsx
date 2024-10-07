import { TITLE } from "@/global";
import Link from "next/link";

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>{TITLE}</h1>
      <ul className='flex justify-center items-center p-2 m-1'>
        <Link
          href={"/"}
          className='p-2 m-2 hover:font-medium hover:border-b-2 border-red-300'>
          使い方
        </Link>
        <Link
          className='p-2 m-2 hover:font-medium hover:border-b-2 border-red-300'
          href={"/mass"}>
          質量
        </Link>
        <Link
          className='p-2 m-2 hover:font-medium hover:border-b-2 border-red-300'
          href={"/piece"}>
          個数
        </Link>
        <Link
          className='p-2 m-2 hover:font-medium hover:border-b-2 border-red-300'
          href={"/volume"}>
          体積
        </Link>
      </ul>
    </header>
  );
};

export default Header;
