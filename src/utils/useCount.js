import { useState } from "react";
export const useCount = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((pre) => {
      return pre + 1;
    });
  };

  const decrease = () => {
    setCount((pre) => {
      return pre > 0 ? pre - 1 : pre;
    });
  };

  return { count, increase, decrease };
};
