import { GlobalContext } from "./GlobalContext"
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

export const GlobalState = (props) => {

    // props.children = todos serão filhos dele; E todos tem acesso à informação!

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  // O valor que todos os filhos do context vão receber é o "value= {data}"
  const data = {
    pokelist, 
    addToPokedex, 
    removeFromPokedex, 
    pokedex 
  }

    return (
        <GlobalContext.Provider value={data}>{/* irá prover todas as informações para os filhos*/ }
        {props.children}
        </GlobalContext.Provider>
    )
}