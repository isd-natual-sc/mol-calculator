import ActCmn from "@/components/ssr/ActCmn";
import SerCmn from "@/components/ssr/SerCmn";
import { cookies } from "next/headers";
import { KEY, roundFloat } from "@/utils/global";
import MaterialList from "@/components/common/MaterialList";
import { mc } from "@/utils/mol";

const CalcMain = ({ params }: { params: { calc: string } }) => {
  // const cookieData = cookies().get(KEY);
  // let materials = [];
  // if (cookieData?.value) {
  //   materials = JSON.parse(cookieData.value ?? []);
  // }

  return (
    <main>
      <SerCmn type={params.calc} />
      {/* <ActCmn type={params.calc}>
        <div className='flex justify-center items-center p-2'>
          <MaterialList materials={materials} />
        </div>

        <h2 className='w-full text-2xl text-center p-2'>
          式量：{roundFloat(mc.molecular(materials))}
        </h2>
      </ActCmn> */}
    </main>
  );
};

export default CalcMain;
