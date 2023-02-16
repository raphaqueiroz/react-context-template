
import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import usePokemon from "../../hooks/usePokemon";
import { handleDetailPage } from "../../Router/cordinator";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import { CatchButton, Container, DetailButton, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./styled";

export default function PokemonCard (props) {

const {pokemonUrl, addToPokedex, removeFromPokedex} = props

const location = useLocation()    

const navigate = useNavigate()

const context = useContext(GlobalContext)


const {pokemon} = usePokemon(pokemonUrl) //state:pokemon recebido da API, que está no hook;

    return (

      <Container color= {getColors(pokemon.types[0])}>

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

      <DetailButton onClick={() => handleDetailPage(navigate, {state:pokemon})}> 
          Ver detalhes
        </DetailButton>

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

          <Pokeball src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16c93e3b-ce11-48da-a4a8-ad1dca9081ec/dmh4ei-666ff8b3-1e52-4318-93a8-50fa1f33ab6c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2YzkzZTNiLWNlMTEtNDhkYS1hNGE4LWFkMWRjYTkwODFlY1wvZG1oNGVpLTY2NmZmOGIzLTFlNTItNDMxOC05M2E4LTUwZmExZjMzYWI2Yy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ktgv0vpDRHcZ4SHaIFm-Zqz_gyM92dOk7Z3jFxi-4a0" alt = "pokeball" />

    </Container>
    )
}