import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";

export const GET = async () => NextResponse.json({ msg: "Hey!" });

export const POST = async (q: NextRequest) => {
  let values: number[] = [];
  const res: {
    // metric: any;
    value: number;
    label: string;
  } = await q.json();

  values.push(res.value);
  const sum = values.map((val) => val / 1000).reduce((a, b) => a + b);
  console.log(sum / values.length, values);

  // fsモジュールでファイル書き込み
  await fs.writeFile(
    `public/vitals-${res.label}-${Date.now()}.json`,
    JSON.stringify({ value: res.value / 1000, label: res.label }, null, 2),
    (err) => {
      if (err) console.log(err);
      else console.log("さくせす");
    }
  );

  return NextResponse.json({ msg: "サクセス" }, { status: 200 });
};
