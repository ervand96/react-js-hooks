import Button from '../../shared/button'
import CreateHooks from '../../shared/create-hooks'
import NewState from '../../shared/new-state'
import NewBr from '../../shared/newBr'
import Nstate from '../../shared/nstate'
import State from '../../shared/state'
import StateNew from '../../shared/stateNew'
import UseCallback from '../../shared/useCallback'
import UseContext from '../../shared/useContext'
import UseEffect from '../../shared/useEffect'
import UseMemo from '../../shared/useMemo'
import UseRef from '../../shared/useRef'
import UseState from '../../shared/useState'
import Wstate from '../../shared/wState'

export default function Hooks() {
  return (
    <div>
      {
        <UseState />
        /* <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseContext />
      <CreateHooks />
      <Button />
      <NewState />
      <State /> 
      <Wstate /> */
      }
      <StateNew />
      <NewBr />
      <Nstate />
    </div>
  )
}
