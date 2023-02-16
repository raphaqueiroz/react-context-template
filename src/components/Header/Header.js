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
                    <img src = "https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt= "pokemon logo" />
                    <button onClick={() => handlePokedexPage(navigate)}>Ver pokedex</button>
                    
                    </>
                );
            
            case "/pokedex":
                return(
                    <>
                    <img src = "https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt= "pokemon logo" />
                    <button onClick={() => handlePokemonsListPage(navigate)}>Ver lista de pokemons</button>
                    </>
                );

            
            
            default:
                return(
                    <>
                    <img src = "https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt= "pokemon logo" />
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