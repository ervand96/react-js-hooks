import { useAlert } from "./alertContext";

import styles from "./alert.module.scss";

export default function Alert() {
  const alert: any = useAlert();

  if (!alert?.visible) return null;
  return (
    <div className={styles.container} onClick={alert.hide}>
      <p>{alert.text}</p>
    </div>
  );
}
