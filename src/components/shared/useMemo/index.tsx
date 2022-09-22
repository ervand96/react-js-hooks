import { useState, useRef, useEffect, useMemo } from "react";

import styles from "./useMemo.module.scss";

const complexCompute = (num: any) => {
  let i = 0;
  while (i < 100000000) i++;
  return num * 2;
};

export default function UseMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const style: any = useMemo(
    () => ({
      color: colored ? "green" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  return (
    <div className={styles.container}>
      <h1 className={styles.useMemo}>Use Memo</h1>
      <h1>Sign Calculation: {computed}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Decrement</button>
      <h1 style={style}>Color</h1>
      <button onClick={() => setColored((prev) => !prev)}>Colors</button>
    </div>
  );
}
