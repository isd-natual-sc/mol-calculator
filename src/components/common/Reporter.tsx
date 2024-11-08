"use client";

import { onLCP } from "web-vitals";

const Reporter = ({ label }: { label?: string }) => {
  onLCP(async (metric) => {
    label ??= "normal";
    await fetch("http://localhost:3000/mol-calculator/api/vitals", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ metric, label }),
    });
  });

  return <></>;
};

export default Reporter;
