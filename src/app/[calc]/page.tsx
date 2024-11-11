import { Path } from "@/utils/types";
import { Suspense } from "react";

// import ActBody from "@/components/ssr/ActBody";
import SerCmn from "@/components/ssr/SerCmn";

const CalcMain = ({ params }: { params: Path }) => {
  return (
    <main>
      <Suspense
        fallback={
          <div className="text-2xl font-extrabold flex justify-center items-center">
            ネコがねころんだ
          </div>
        }
      >
        <SerCmn type={params.calc} />
        {/* <ActBody calc={params.calc} /> */}
      </Suspense>
    </main>
  );
};

export default CalcMain;
