import ContextData from "./ContextData";
import DataCitys from "../data/datos";
import { useReducer, useState } from "react";
import myReducer from "../reducer/myReducer";
import typesAuth from "../reducer/typesAuth";
import reducerAjenda from "../reducer/reducerAjenda";


function ProviderData({ children }) {
   const CITYDATA = DataCitys;

   const initialValueAjenda=[]

   const init = () => {
      const usuario = localStorage.getItem('valor')
      return {
        logueado: !!usuario,
        user: usuario,
      };
   }
   const [autenticado, dispatch] = useReducer(myReducer, {}, init)
   const [ajendados, dispatchReducerAjenda] = useReducer(reducerAjenda, initialValueAjenda)
   const[totalPagar,setTotalPagar]=useState(0)
   
   const loguear = (user) => {
      const action = {
         type: typesAuth.login,
         pyload: user
      }
      localStorage.setItem('valor', user)
      dispatch(action)
   }
   const desLoguear = () => {
      const action = {
         type: typesAuth.logouth,
         pyload: null
      }
      localStorage.removeItem('valor')
      dispatch(action)
   }
  return (
    <ContextData.Provider value={{ CITYDATA, ...autenticado, loguear,desLoguear, ajendados, dispatchReducerAjenda, totalPagar,setTotalPagar} }>{children}</ContextData.Provider>
  );
}

export default ProviderData;
