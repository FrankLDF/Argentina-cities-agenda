import { useContext } from "react"
import ContextData from "../context/ContextData"
import { Navigate } from "react-router-dom"

function PublicRouter({ children }) {
    const {logueado}= useContext(ContextData)
    return (logueado)
    ?<Navigate to={'/'}/>
    :children
}

export default PublicRouter
