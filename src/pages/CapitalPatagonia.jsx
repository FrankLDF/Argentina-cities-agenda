import CardCity from "../components/CardCity"
import { useContext } from "react";
import ContextData from "../context/ContextData";


function CapitalPatagonia() {

  const { CITYDATA } = useContext(ContextData)
  
  const CPCitys = CITYDATA.filter(city=>city.zona==='cp')
  return (
    <div style={{ width:"100vw", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {CPCitys.map((city, index) => (
        <CardCity
          key={index}
          title={city.nombre}
          description={city.situacion}
          image={city.imagen}
        />
      ))}
    </div>
  );
}

export default CapitalPatagonia
