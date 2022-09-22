import { useState, useCallback } from "react";
import ItemsList from "../itemList/itemsList";
import styles from "./useCallback.module.scss";

export default function UseCallback(): JSX.Element {
  const [colored, setColored] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const style: any = {
    color: colored ? "green" : "black",
  };

  const generateItemFromApi = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div className={styles.container}>
      <h1 className={styles.useCallback}>use Callback</h1>
      <h1 style={style}>Sign Calculation: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setColored((prev) => !prev)}>Colors</button>

      <ItemsList getItems={generateItemFromApi} />
    </div>
  );
}
