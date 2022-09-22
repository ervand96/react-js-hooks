import { useEffect, useState } from "react";

import styles from "./useEffect.module.scss";

export default function UseEffect() {
  const [type, setType] = useState<string>("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/10`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const mouseMoveHandler = (event: any) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.useEffect}>Use Effect</h1>
      <h1>Resources: {type}</h1>
      <button onClick={() => setType("Users")}>Users</button>
      <button onClick={() => setType("Todos")}>Todo</button>
      <button onClick={() => setType("Posts")}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}
