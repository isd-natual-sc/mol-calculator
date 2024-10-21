"use client";

import { useRef } from "react";

const Manual = () => {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div className="flex justify-center items-center">
      <video src="explain1.mp4" height={200} ref={ref}></video>
      <button onClick={() => ref.current?.play()}>再生</button>
    </div>
  );
};

export default Manual;
