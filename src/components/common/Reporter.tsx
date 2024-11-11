"use client";

import { onFCP, onLCP, LCPMetric, FCPMetric } from "web-vitals";

// interface Metric {
//   lcp?: LCPMetric;
//   fcp?: FCPMetric;
//   label?: string;
// }

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
