import React from "react";

function Score() {
  return (
    <div className="rounded-full score-bg-color w-32 h-32 flex flex-col items-center justify-center md:w-52 md:h-52  mx-auto">
      <h1 className="text-white text-5xl font-bold md:text-7xl">76</h1>
      <p className="text-[#8474ff] font-light md:text-xl">of 100</p>
    </div>
  );
}

export default Score;
