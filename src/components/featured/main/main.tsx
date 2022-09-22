import { useAlert } from "../../shared/alert/alertContext";

export default function Main() {
  const { show }: any = useAlert();

  return (
    <div>
      <h1>Main Context</h1>
      <button onClick={() => show("This is text in Main.js")}>See Alert</button>
    </div>
  );
}
