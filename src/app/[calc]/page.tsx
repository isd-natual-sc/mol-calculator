import ActCmn from "@/components/ssr/ActCmn";
import ClientCmn from "@/components/csr/CntCmn";
import SerCmn from "@/components/ssr/SerCmn";

const CalcMain = ({ params }: { params: { calc: string } }) => {
  return (
    <main>
      <ClientCmn type={params.calc} />
      {/* <SerCmn type={params.calc} /> */}
      {/* <ActCmn type={params.calc} /> */}
    </main>
  );
};

export default CalcMain;
