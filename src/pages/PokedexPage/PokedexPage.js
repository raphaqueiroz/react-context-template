import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container } from "./styled";

function PokedexPage (props) {

    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    const {pokedex, removeFromPokedex} = context

console.log(pokedex)

    return (
        <Container>
      <Header />
 
      <section>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon}
            pokemonUrl={pokemon}
            removeFromPokedex={()=>removeFromPokedex(pokemon)}
          />
        ))}
      </section>
    </Container>
    )
}

export default PokedexPage