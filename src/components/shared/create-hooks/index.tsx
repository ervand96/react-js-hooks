import { useEffect, useState } from "react";

import styles from "./create-hooks.module.scss";

const useLogger = (value: any) => {
  useEffect(() => {
    console.log("Value Changed:", value);
  }, [value]);
};

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue("");
  };

  return {
    bind: { value, onChange },
    value,
    clear,
  };
};

export default function CreateHooks() {
  const input = useInput("");
  useLogger(input.value);

  return (
    <div className={styles.container}>
      <h1 className={styles.createHooks}>Create Hooks</h1>
      <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...input.bind} />
        <button onClick={input.clear} disabled={!input.value}>
          Clear
        </button>
      </div>
      <h1>{input.value}</h1>
    </div>
  );
}
