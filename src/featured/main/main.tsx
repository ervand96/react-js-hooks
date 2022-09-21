import { useAlert } from "../../shared/alert/alertContext";

export default function Main() {
  const  { toggle }: any = useAlert();
  return (
    <div>
      <h1>Main Context</h1>
      <button onClick={toggle}>See Alert</button>
    </div>
  );
}
