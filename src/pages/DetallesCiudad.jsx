import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ContextData from "../context/ContextData";
import typesAuth from "../reducer/typesAuth";

function DetallesCiudad() {
  const rutaImagen = "../src/assets/images/";
  const { city } = useParams();
  const { CITYDATA, dispatchReducerAjenda, ajendados, setTotalPagar } = useContext(ContextData);
  const detalleCity = CITYDATA.find((cty) => cty.nombre === city);

  const navegacion=useNavigate()


  const ajendarCity = () => {
    setTotalPagar(totalPagar=>totalPagar + Number(detalleCity.precio));
    const action = {
      type: typesAuth.ajendar,
      pyload: { city: detalleCity.nombre, price: detalleCity.precio},
    };
    dispatchReducerAjenda(action)
  }
  const anularAjenda = () => {
    setTotalPagar(totalPagar=> totalPagar-(Number(detalleCity.precio)));
    const action = {
      type: typesAuth.anular,
      pyload: {city:detalleCity.nombre},
    };
    dispatchReducerAjenda(action);
  }
  const irAtras = () => {
    navegacion(-1)
  }

  const cityIsAjendada = ajendados.find(lugar=>lugar.city===city)

  return (
    <>
      <h1>{detalleCity.nombre}</h1>
      <p>{detalleCity.servicio}</p>
      <div
        style={{
          backgroundImage: `url(${rutaImagen}${detalleCity.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "70vw",
          height: "60vh",
        }}
      >
        <div>{`${detalleCity.precio}$`}</div>
        {
          cityIsAjendada
          ?
          <button onClick={anularAjenda}>Anular</button>
          :
          <button onClick={ajendarCity}>Contratar</button>
        }
        <button onClick={irAtras} >Volver</button>
      </div>
    </>
  );
}

export default DetallesCiudad;
