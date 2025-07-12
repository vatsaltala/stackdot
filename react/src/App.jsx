import {Routes,Route} from "react-router-dom"
import  Login  from "./component/Login"
import Dashboard  from "./component/Dashboard"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  )
}

export default App
