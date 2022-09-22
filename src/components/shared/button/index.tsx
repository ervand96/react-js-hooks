import { useState } from "react";

export default function Button(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const valueChange = (e: any): void => {
    setValue(e.target.value);
  };

  const clearInput = (): void => {
    setValue("");
  };

  return (
    <div>
      <input type="text" value={value} onChange={valueChange} />
      <button onClick={clearInput} disabled={!value}>
        Clear
      </button>
      <h1>{value}</h1>
    </div>
  );
}
