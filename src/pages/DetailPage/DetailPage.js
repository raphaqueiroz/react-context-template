import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handlePokemonsListPage } from "../../Router/cordinator";

function DetailPage () {

    const navigate = useNavigate()

    const {state} = useLocation()  // state recebido da função que está no coordinator;

    const {
        id ,
        moves,
        name,
        stats,
        types,
        sprites,
      } = state

      console.log("teste:", stats[0].base_stat)

    return (
        <div>

            <img src = {sprites.frontDefault} alt = {name}/>
            <img src = {sprites.backDefault} alt = {name} />

            <p>#{id}</p>
            <h2>{name}</h2>
            <p>{types.map((type) => {
                return type
            })}</p>
            <p>{moves.map((move) => {
                return move
            })}</p>
            <p>{stats[0].name} : {stats[0].base_stat}</p>
            <p>{stats[1].name} : {stats[1].base_stat}</p>
            <p>{stats[2].name} : {stats[2].base_stat}</p>
            <p>{stats[3].name} : {stats[3].base_stat}</p>
            <p>{stats[4].name} : {stats[4].base_stat}</p>
            <p>{stats[5].name} : {stats[5].base_stat}</p>


            <button onClick={()=> handlePokemonsListPage(navigate)}>Todos os pokemons</button>
        </div>
    )
}

export default DetailPage