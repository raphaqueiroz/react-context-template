import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage"
import DetailPage from "../pages/DetailPage/DetailPage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"

export default function Router () {

    return (
        <BrowserRouter>
            <Routes>
                
                <Route
                    path="/"
                    element={<PokemonsListPage/>}
                    />
                
                <Route
                    path="/details"
                    element={<DetailPage/>}
                    />

                <Route
                    path="/pokedex"
                    element={<PokedexPage/>}
                    />                    
            </Routes>
        </BrowserRouter>
    )
}