import { KEY, roundFloat } from "@/utils/global";
import MaterialList from "../common/MaterialList";
import ActCmn from "./ActCmn";
import { mc } from "@/utils/mol";
import { Path } from "@/utils/types";
import { cookies } from "next/headers";

const ActBody = ({ calc }: Path) => {
  const cookieData = cookies().get(KEY);
  let materials = [];
  if (cookieData?.value) {
    materials = JSON.parse(cookieData.value ?? []);
  }

  return (
    <ActCmn type={calc}>
      <div className="flex justify-center items-center p-2">
        <MaterialList materials={materials} />
      </div>

      <h2 className="w-full text-2xl text-center p-2">
        式量：{roundFloat(mc.molecular(materials))}
      </h2>
    </ActCmn>
  );
};

export default ActBody;
