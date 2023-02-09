import axios from "axios";
import { useEffect, useState } from "react";
import { addValueToKeyRequestPokemon, initialKeysRequestPokemon } from "../utils/ReturnRequestPokemon";

export default function usePokemon (pokemonUrl) {


    const [pokemon, setPokemon] = useState(initialKeysRequestPokemon)

    useEffect(()=> {
        fetchPokemon();
    }, [])


    const fetchPokemon = async () => {
      try {
        const response = await axios.get(pokemonUrl);
        console.log(addValueToKeyRequestPokemon(response))
        setPokemon(addValueToKeyRequestPokemon(response));
      } catch (error) {
        console.log("Erro ao buscar lista de pokemons");
        console.log(error);
      }
    };

    return {pokemon}


}