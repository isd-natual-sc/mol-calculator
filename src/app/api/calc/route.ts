import { Material } from "@/types";

export const POST = async (q: Request) => {
  const m: Material = await q.json();
};
