import React from "react";
import Card from "./Card";
import Summary from "./Summary";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap bg-white font-Hanken-grotesk max-w-3xl md:card-shadow md:shadow-clr-royal-blue rounded-3xl">
        <Card />
        <Summary />
      </div>
    </div>
  );
}

export default App;
