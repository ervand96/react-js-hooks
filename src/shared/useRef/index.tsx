import { useEffect, useRef, useState } from "react";

import styles from "./useRef.module.scss";

export default function UseRef() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className={styles.container}>
      <h1 className={styles.useRef}>Use Ref</h1>
      <h1>Rendering: {renderCount.current}</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>Before state {prevValue.current}</h2>
    </div>
  );
}
