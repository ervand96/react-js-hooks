import { useAlert } from "./alertContext";

import styles from "./alert.module.scss";

export default function Alert() {
  const { alert }: any = useAlert();

  if (!alert) return null;

  return (
    <div className={styles.container} onClick={alert.toggle}>
      <p>This is a very important message</p>
    </div>
  );
}
