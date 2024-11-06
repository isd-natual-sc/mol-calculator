"use client";

import { useRef, useState } from "react";

const Manual = () => {
  const ref = useRef<HTMLVideoElement>(null);

  // 再生停止の状態
  const [isRepro, setIsRepro] = useState(false);
  const handleVideoState = () => setIsRepro(!isRepro);

  const btnStyle =
    "px-5 py-1 bg-red-600 rounded-lg text-white shadow-lg active:shadow-none text-lg m-3";

  return (
    <div className="flex flex-col justify-center items-center">
      <video src="explain1.mp4" height={200} ref={ref}></video>

      {isRepro ? (
        <button
          onClick={() => {
            ref.current?.pause();
            handleVideoState();
          }}
          className={btnStyle}
        >
          ■ ■
        </button>
      ) : (
        <button
          onClick={() => ref.current?.play().then(handleVideoState)}
          className={btnStyle}
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default Manual;
