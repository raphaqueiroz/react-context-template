
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import usePokemon from "../../hooks/usePokemon";
import { handleDetailPage } from "../../Router/cordinator";
import { getTypes } from "../../utils/ReturnPokemonType";

import { CatchButton, Container, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./styled";

export default function PokemonCard (props) {

const {pokemonUrl, cardColor, addToPokedex, removeFromPokedex} = props

const location = useLocation()    

const navigate = useNavigate()

const context = useContext(GlobalContext)


const {pokemon} = usePokemon(pokemonUrl) //state:pokemon recebido da API, que está no hook;

    return (

      <Container color= {cardColor}>

        <div>
      
      <PokemonNumber>#{pokemon.id}</PokemonNumber>
      <PokemonName>{pokemon.name}</PokemonName>
      <TypesContainer>
      {pokemon.types.map((type) => {
        return (
          <PokemonType key = {type} src = {getTypes(type) } alt = "" />
        )
      })}
      </TypesContainer>

      <button onClick={() => handleDetailPage(navigate, {state:pokemon})}> 
          Ver detalhes
        </button>

      </div>

      <div>

      <Pokemon src={pokemon.sprites.default} alt={pokemon.name} />

        {location.pathname === "/" ? (
          <CatchButton onClick={() => addToPokedex(pokemonUrl)}>
            Adicionar à Pokedex
          </CatchButton>
        ) : (
          <CatchButton onClick={() => removeFromPokedex(pokemon)}>
            Remover da Pokedex
          </CatchButton>
        )}
        
      </div>

          <Pokeball src = "" alt = "pokeball" />

    </Container>
    )
}