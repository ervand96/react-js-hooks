import Button from "../../shared/button";
import CreateHooks from "../../shared/create-hooks";
import UseCallback from "../../shared/useCallback";
import UseContext from "../../shared/useContext";
import UseEffect from "../../shared/useEffect";
import UseMemo from "../../shared/useMemo";
import UseRef from "../../shared/useRef";
import UseState from "../../shared/useState";

export default function Hooks() {
  return (
    <div>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseContext />
      <CreateHooks />
      <Button />
    </div>
  );
}
