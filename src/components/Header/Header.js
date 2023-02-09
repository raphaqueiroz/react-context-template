import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styled";
import { handlePokemonsListPage, handlePokedexPage } from "../../Router/cordinator";

export default function Header () {

    const location = useLocation();

    const navigate = useNavigate()

    const renderHeader = () => {
        switch(location.pathname) {
            case "/":
                return(
                    <>
                    <span>Lista de pokemons</span>
                    <button onClick={() => handlePokedexPage(navigate)}>Ver pokedex</button>
                    </>
                );
            
            case "/pokedex":
                return(
                    <>
                    <span>Pokedex</span>
                    <button onClick={() => handlePokemonsListPage(navigate)}>Ver lista de pokemons</button>
                    </>
                );

            
            
            default:
                return(
                    <>
                    <span>Página inexistente</span>
                    <button onClick={() => handlePokemonsListPage(navigate)}>Voltar à página inicial</button>
                    </>
                );
        }
    }

    return (
        <Container>
            {renderHeader()}
        </Container>
    )
}