import Alert from "../alert";
import Main from "../../featured/main/main";
import { AlertProvider } from "../alert/alertContext";

import styles from "./useContext.module.scss";


export default function UseContext() {
  return (
    <AlertProvider>
      <div className={styles.container}>
        <h1>use Context</h1>
        <Main />
        <Alert />
      </div>
    </AlertProvider>
  );
}
