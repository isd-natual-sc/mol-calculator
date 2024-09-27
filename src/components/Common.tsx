import { formulaAct } from "@/actions/formula";
import ClientInput from "@/components/ClientInput";
import InputCard from "@/components/InputCard";

export default function Common() {
  return (
    <main>
      <h1 className="text-2xl">Chemical Calculator</h1>
      <form
        action={formulaAct}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex justify-center items-center">
          <ClientInput
            label="物質名を入力してください"
            name="material"
            placeholder="Enter material."
            width={100}
          />
          <InputCard
            label="個数"
            name="sub"
            placeholder="Enter sub."
            width={100}
          />
        </div>
        <button type="submit">追加</button>
      </form>
    </main>
  );
}
