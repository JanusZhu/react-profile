import { useCount } from "../utils/useCount";
export const Count = () => {
  const { count, increase, decrease } = useCount();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};
