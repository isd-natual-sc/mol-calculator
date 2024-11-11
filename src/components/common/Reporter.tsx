"use client";

import { onFCP, onLCP } from "web-vitals";

const Reporter = ({ label }: { label?: string }) => {
  label ??= "normal";

  onLCP(async (lcp) => {
    let value = lcp.value;
    onFCP(async (fcp) => {
      value += fcp.value;
    });

    await fetch(String(process.env.NEXT_PUBLIC_VITAL_API_URL), {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ value, label }),
    });
  });

  return <></>;
};

export default Reporter;
