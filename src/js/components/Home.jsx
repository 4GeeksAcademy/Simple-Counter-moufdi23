import React from "react";
import { SecondCounter } from "./SecondsCounter";
//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <SecondCounter seconds={0} />
    </div>
  );
};

export default Home;
