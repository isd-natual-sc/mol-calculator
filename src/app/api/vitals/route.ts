import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";

export const GET = async () => NextResponse.json({ msg: "Hey!" });

export const POST = async (q: NextRequest) => {
  const res: {
    metric: any;
    label: string;
  } = await q.json();

  // fsモジュールでファイル書き込み
  await fs.writeFile(
    `public/vitals-${res.label}-${Date.now()}.json`,
    JSON.stringify(res.metric, null, 2),
    (err) => {
      if (err) console.log(err);
      else console.log("さくせす");
    }
  );

  return NextResponse.json({ msg: "サクセス" }, { status: 200 });
};
