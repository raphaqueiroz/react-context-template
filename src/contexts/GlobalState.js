import { GlobalContext } from "./GlobalContext"
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

export const GlobalState = (props) => {

    const [pokeList, setPokeList] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonApi, setPokemonApi] = useState({})
    

    useEffect(() => {
        fetchPokeList()
    }, [])

    const fetchPokeList = async () => {
        try{
            const response = await axios.get(BASE_URL);
            console.log(response.data.results)
            setPokeList(response.data.results)
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error.response);
        }
    }


    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex === pokemonToAdd
        );

        if (!isAlreadyOnPokedex) {

            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
    }

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
          (pokemonInPokedex) => pokemonInPokedex !== pokemonToRemove
        );
    
        setPokedex(newPokedex);
        console.log(pokedex)
      };


    const data = {
        pokeList, 
        addToPokedex, 
        removeFromPokedex, 
        pokedex, 
        pokemonApi, 
        setPokemonApi
    }

    return(
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )




}