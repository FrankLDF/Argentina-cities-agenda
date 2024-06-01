import { useNavigate } from "react-router-dom";

function SinLugaresContratados() {
    const navegacion = useNavigate()

    const volverCP = () => {
        navegacion('/capitalpatagonia')
    }
    const volverNE = () => {
        navegacion('/norteeste')
    }
  return (
    <div>
      (Todavia no has contratado ninguna actividad.
      <br />
      Haz clic en <button onClick={volverCP}>Capital y Patagonia</button> o{" "}
      <button onClick={volverNE}>Norte y este</button> para ver nuestras ofertas ).
    </div>
  );
}

export default SinLugaresContratados
