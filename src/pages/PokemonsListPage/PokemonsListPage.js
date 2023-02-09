import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import { Container } from "./styled";

function PokemonsListPage (props) {

    const context = useContext(GlobalContext)

    const {pokeList, pokedex, addToPokedex} = context
    

    const filteredList = () =>
    pokeList.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );


    return (
        <Container>
            
            <Header/>
            
            <section>
                {filteredList().map((pokemon) => {
                    return (
                        <PokemonCard
                        key={pokemon.url}
                        pokemonUrl={pokemon.url}
                        addToPokedex={addToPokedex}
                        />
                    )
                })}
            </section>
   
        </Container>
    )
}

export default PokemonsListPage 