import { useContext } from "react"
import ContextData from "../context/ContextData"
import { Navigate } from "react-router-dom"


function PrivateRouters({children}) {
    
    const {logueado}=useContext(ContextData)
    return (logueado)
    ?children
    :<Navigate to={'/login'}/>
}

export default PrivateRouters
