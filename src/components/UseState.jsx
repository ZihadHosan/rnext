import { useState } from "react";

export default function MyCount() {
  const [count, setCount] = useState(0);

  const handelPlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1 className="text-white bg-blue-950 py-2 px-10 rounded-lg mb-3 inline-block text-lg">
        {count}
      </h1>
      <div className="flex">
        <button className="primaryBtn" onClick={handelPlus}>
          Number increase
        </button>
        <button className="primaryBtn" onClick={handleMinus}>
          Number dicrease
        </button>
      </div>
    </>
  );
}
