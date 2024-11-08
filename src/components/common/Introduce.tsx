import Link from "next/link";

const Introduce = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold p-3">
        伊志田高校の自然科学部について
      </h1>
      <div>骨格標本などを作っています。</div>
      <Link
        href="https://www.instagram.com/nature._.science/profilecard/?igsh=bmgxd2dxbmE3MWJp"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-xl"
      >
        伊志田高校ー自然科学部 公式
      </Link>
    </div>
  );
};

export default Introduce;
