import { AppRoutes } from "./AppRoutes"
import Home from "./pages/HomePage/Home"
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
import { PokemonPage } from "./pages/PokemonPage/PokemonPage"
function App() {
  return (

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element ={<PokemonPage/>}/>

        </Routes>

  )
}

export default App
