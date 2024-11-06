import Link from "next/link";

const LinkListRSC = () => {
  return (
    <ul className="text-lg flex justify-center items-center p-2 m-1">
      <Link
        href={"/"}
        className="p-2 m-2 hover:font-medium text-blue-500 hover:underline"
      >
        使い方
      </Link>
      <Link
        className="p-2 m-2 hover:font-medium text-blue-500 hover:underline"
        href={"/mass"}
      >
        質量
      </Link>
      <Link
        className="p-2 m-2 hover:font-medium text-blue-500 hover:underline"
        href={"/piece"}
      >
        個数
      </Link>
      <Link
        className="p-2 m-2 hover:font-medium text-blue-500 hover:underline"
        href={"/volume"}
      >
        体積
      </Link>
      <Link
        className="p-2 m-2 hover:font-medium text-blue-500 hover:underline"
        href={"/mol"}
      >
        物質量
      </Link>
    </ul>
  );
};

export default LinkListRSC;
