import typesAuth from "./typesAuth";


function reducerAjenda(state,action) {
    switch (action.type) {
        case typesAuth.ajendar:
            return [
                ...state,{city:action.pyload.city, price: action.pyload.price}
            ]
        case typesAuth.anular:
            return (
                state.filter(city=>city.city !== action.pyload.city)
            )

            
            
  }
}

export default reducerAjenda
