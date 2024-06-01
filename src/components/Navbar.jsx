import { NavLink, useNavigate } from "react-router-dom";
import estilo from  "./Navbar.module.css";
import { useContext } from "react";
import ContextData from "../context/ContextData";

function Navbar() {
  const {desLoguear}=useContext(ContextData)
  const navegacion = useNavigate();

  const logout = () => {
    desLoguear()
    navegacion("/login", { replace: true });
  };
  return (
    <nav>
      <NavLink
        to={"/capitalpatagonia"}
        className={({ isActive }) => (isActive ? estilo.active : "")}
      >
        Capital y Patagonia
      </NavLink>

      <NavLink
        to={"/norteeste"}
        className={({ isActive }) => (isActive ? estilo.active : "")}
      >
        Norte y Este
      </NavLink>

      <NavLink
        to={"/rutas"}
        className={({ isActive }) => (isActive ? estilo.active : "")}
      >
        Rutas Ajendadas
      </NavLink>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
