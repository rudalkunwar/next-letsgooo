"use client";
import React from "react";
import { useState } from "react";

function Page() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  const dec = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <button className="bg-gray-400 px-3 py-2 mx-2 rounded" onClick={inc}>
          +
        </button>
        {count}
        <button className="bg-gray-400 px-3 py-2 mx-2 rounded" onClick={dec}>
          -
        </button>
      </div>
    </div>
  );
}

export default Page;
