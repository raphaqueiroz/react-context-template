import React from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import { Container } from "./styled";
import { getColors } from "../../utils/ReturnCardColor";

function PokemonsListPage (props) {

    const context = useContext(GlobalContext)

    const {pokeList, pokedex, addToPokedex} = context
    

    const filteredList = () =>
    pokeList.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.url === pokemonInPokedex
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
                        cardColor={getColors(pokemon.types)}
                        />
                    )
                })}
            </section>
   
        </Container>
    )
}

export default PokemonsListPage 