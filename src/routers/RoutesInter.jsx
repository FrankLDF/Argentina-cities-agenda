import { Routes, Route, Navigate } from "react-router-dom"
import CapitalPatagonia from "../pages/CapitalPatagonia"
import NorteEste from "../pages/NorteEste"
import DetallesCiudad from "../pages/DetallesCiudad"
import Ajenda from "../pages/Ajenda"
import Error404 from "../pages/Error404"
import Navbar from "../components/Navbar"

function RoutesInter() {
  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/capitalpatagonia" element={<CapitalPatagonia/> } />
              <Route path="/norteeste" element={<NorteEste/> } />
              <Route path="/detalles/:city" element={<DetallesCiudad/> } />
              <Route path="/rutas" element={<Ajenda/> } />
              <Route path="/" element={<Navigate to={'capitalpatagonia'}/> } />
              <Route path="/*" element={<Error404/> } />
      </Routes>
    </>
  )
}

export default RoutesInter
