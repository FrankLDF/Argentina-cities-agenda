import { useContext } from "react";
import LugaresContratados from "../components/LugaresContratados";
import SinLugaresContratados from "../components/SinLugaresContratados";
import ContextData from "../context/ContextData";

function Ajenda() {
  const { ajendados, user, totalPagar } = useContext(ContextData)
  
  
  return (
    <div>
      <h2>Lugares a visitar:</h2>
      {(ajendados.length > 0) ? (
        ajendados.map((city, index) => 
          <LugaresContratados key={index} nombre={city.city} precio={city.price} />)
      ) : (
        <SinLugaresContratados />
      )}
      <p>
        <span>Total a pagar:</span>{totalPagar}$
      </p>
      <p>
        <span>Nombre referencia:</span>{user}
      </p>
    </div>
  );
}

export default Ajenda;
