import React from "react";
import Score from "./Score";

function Card() {
  return (
    <div className="text-center">
      <h2 className="">Your Result</h2>
      <Score />
      <h2>Greate</h2>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
}

export default Card;