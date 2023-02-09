import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import usePokemon from "../../hooks/usePokemon";
import { handleDetailPage } from "../../Router/cordinator";
import { Container } from "./styled";

export default function PokemonCard (props) {

const {pokemonUrl, addToPokedex, removeFromPokedex} = props

const location = useLocation()    

const navigate = useNavigate()

const context = useContext(GlobalContext)


const {pokemon} = usePokemon(pokemonUrl)

    return (

      <Container>
      <img src={pokemon.sprites.default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <p>{pokemon.types.map((type) => {
        return type
      })}</p>
      <div>
        {location.pathname === "/" ? (
          <button onClick={() => addToPokedex(pokemon)}>
            Adicionar à Pokedex
          </button>
        ) : (
          <button onClick={() => removeFromPokedex(pokemon)}>
            Remover da Pokedex
          </button>
        )}

        <button onClick={() => handleDetailPage(navigate, pokemon)}>
          Ver detalhes
        </button>
      </div>
    </Container>
    )
}