import React from "react";
import Navbar from "./Navbar";

import pc from "../photos/pc.jpg";
import Addproduct from "../firebase/Addproduct";

function Home() {
  return (
    <div>
      <Navbar />
      <img src={pc} className="object-cover  h-1/2 " />
      <br />
      <div className="w-full h-16 bg-gray-500">
        <p className="text-2xl text-center">Best of electronics</p>
      </div>
      <Addproduct/>
    </div>
  );
}

export default Home;
