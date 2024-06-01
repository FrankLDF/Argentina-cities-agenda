import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import ContextData from "../context/ContextData";


function Login() {

  const {loguear} = useContext(ContextData)

  const [userName,setUserName]=useState('')
  const navegacion = useNavigate();

  const login = () => {
    if (userName) {
      loguear(userName)
      navegacion('/', { replace: true })
    }
  }
  return (
    <div>
          <h2>Recorre el pais:</h2>
          <label htmlFor="name">Nombre:</label>
          <input onChange={e=>{setUserName(e.target.value)}} type="text" name="name" id="name" />
          <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
