"use client";
import React from "react";
import { useState } from "react";
import api from "../axios/Axios";

function Page() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  const dec = () => {
    setCount(prevCount => prevCount - 1);
  };

  const sendData=()=>{
    const data = {
      "name":"aakash",
      "Age":"21",
      "faculty":"bca",
      "Address":"dalldale"
    }
    const result = api.post('/add',data);
    result.then(response=>{
      console.log(response.data);
    }).then(e=>console.log(e));

  }

  return (
    <div className="h-screen flex items-center justify-center">
      {/* <div>
        <button className="bg-gray-400 px-3 py-2 mx-2 rounded" onClick={inc}>
          +
        </button>
        {count}
        <button className="bg-gray-400 px-3 py-2 mx-2 rounded" onClick={dec}>
          -
        </button>
      </div> */}

      <div className="bg-cyan-300">
        <button className="p-3 text-black" onClick={sendData}>POST DATA</button>
      </div>
    </div>
  );
}

export default Page;
