import { useState } from "react";
import UseEffect from "../useEffect";

import styles from "./a.module.scss";

export default function NewState(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [changeObject, setChangeObject] = useState({
    name: "Valod",
    time: new Date(),
  });

  const handler = (event: any): void => {
    setValue(event.target.value);
  };

  const clear = (): void => {
    setValue("");
  };

  const plus = (): void => {
    setCount(count + 1);
  };

  const minus = (): void => {
    if (count > 0) setCount(count - 1);
  };

  const updateTitle = (): void => {
    setChangeObject((e) => {
      return {
        ...e,
        name: "Taza",
      };
    });
  };

  return (
    <div className={styles.a}>
      <h1>New State</h1>
      {value ? (
        <div>
          <input type="text" onChange={handler} value={value} />
          <button onClick={clear} disabled={!value}>
            Clean
          </button>
          <UseEffect />
        </div>
      ) : (
        <div>
          <input type="text" onChange={handler} value={value} />
        </div>
      )}
      <h1>{value}</h1>

      <h1>{count}</h1>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>

      <h1>{JSON.stringify(changeObject)}</h1>
      <button onClick={updateTitle}>CHange TItle</button>
    </div>
  );
}
