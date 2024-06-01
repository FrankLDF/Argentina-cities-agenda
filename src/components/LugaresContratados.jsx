import { useContext } from "react"
import ContextData from "../context/ContextData"
import typesAuth from "../reducer/typesAuth"


function LugaresContratados({ nombre, precio }) {
  const { dispatchReducerAjenda,setTotalPagar } = useContext(ContextData)
  const anularAjenda = () => {
    setTotalPagar((totalPagar) => totalPagar - Number(precio));
    const action = {
      type: typesAuth.anular,
      pyload:{city:nombre}
    }
    dispatchReducerAjenda(action)
  }
  return (
    <div>
          <button onClick={anularAjenda}>Anular</button>
          <span>{nombre} ({precio}$)</span>
    </div>
  )
}

export default LugaresContratados
