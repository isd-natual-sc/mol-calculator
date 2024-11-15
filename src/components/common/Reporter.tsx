"use client";

import { onFCP, onLCP, onINP } from "web-vitals";

type Metric = {
  name: "FCP" | "LCP" | "INP" | "TTFB";
  value: number;
  label: string;
  navType: string;
  browserName: string;
};

const Reporter = ({ label }: { label?: string }) => {
  label ??= "normal";
  const url = String(process.env.NEXT_PUBLIC_VITAL_API_URL);
  console.log(url);

  onLCP(async (lcp) => {
    let body: Metric = {
      name: "LCP",
      value: lcp.value,
      label,
      navType: lcp.navigationType,
      browserName: window.navigator.userAgent,
    };

    await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      mode: "no-cors",
      body: JSON.stringify(body),
    })
      .then(() => console.log("Success"))
      .catch((err) => console.log(err));
  });

  return <></>;
};

export default Reporter;
