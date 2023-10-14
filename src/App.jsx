import { useRoutes } from "react-router-dom"
import Routes from './Routes.jsx'
import Topbar from "./components/Topbar.jsx"

function App() {
  let route = useRoutes(Routes);

  return (
    <>
   <Topbar/>
   {route}
    </>
  )
}

export default App
