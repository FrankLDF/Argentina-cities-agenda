import CardCity from "../components/CardCity";
import { useContext } from "react";
import ContextData from "../context/ContextData";

function NorteEste() {
  const { CITYDATA } = useContext(ContextData);

  const CPCitys = CITYDATA.filter((city) => city.zona === "no");
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
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

export default NorteEste;
