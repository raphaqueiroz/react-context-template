import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { handlePokemonsListPage } from "../../Router/cordinator";
import { Container } from "./styled";

function PokedexPage (props) {

    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    const {pokedex, removeFromPokedex} = context

    return (
        <Container>
      <Header />
 
      <section>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={()=>removeFromPokedex(pokemon)}
          />
        ))}
      </section>
    </Container>
    )
}

export default PokedexPage