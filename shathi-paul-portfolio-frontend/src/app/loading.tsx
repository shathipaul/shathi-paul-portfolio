"use client";
import { useEffect, useState } from "react";
const LoadingPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, 100));
      }, 30); // speed of increment (30ms per step)
      return () => clearInterval(interval);
    }
  }, [count]);
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white">
      {/* Number Counter */}
      <span className="text-5xl font-bold transition-all duration-300">
        {count}%
      </span>

      {/* Progress Bar */}
      <div className="mt-6 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-200 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
