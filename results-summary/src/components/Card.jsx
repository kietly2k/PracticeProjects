import React from "react";
import Score from "./Score";

function Card() {
  return (
    <div className="text-center bg-linear card-bg-color w-full md:w-96 text-[#d1c4ff] rounded-b-3xl md:rounded-t-3xl md:px-20">
      <h2 className="font-medium text-2xl py-7">Your Result</h2>
      <Score />
      <h2 className="text-white text-3xl my-5">Greate</h2>
      <p className="text-sm mb-11 max-w-[16rem] md:max-w-none mx-auto md:text-lg">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
}

export default Card;