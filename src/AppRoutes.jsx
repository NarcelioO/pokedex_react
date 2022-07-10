import React from "react"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/HomePage/Home"
import { PokemonPage } from "./pages/PokemonPage/PokemonPage"



export function AppRoutes(){
 
        <Routes>
          <Route path="/pokemon" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonPage/>}/>
        </Routes>
    
}