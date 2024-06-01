import typesAuth from "./typesAuth";

function myReducer(state, action) {
    switch (action.type) {
        case typesAuth.login:
            return {
                logueado: true,
                user: action.pyload
            }
        case typesAuth.logouth:
            return {
                logueado: false,
                user: null
            }
            
  }
  
}

export default myReducer
