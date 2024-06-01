import ProviderData from "./context/ProviderData"
import LoginRouter from "./routers/LoginRouter"


function App() {
  

  return (
    <>
      <ProviderData>
        <LoginRouter/>
      </ProviderData>
    </>
  )
}

export default App
