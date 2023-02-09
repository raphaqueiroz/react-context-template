import React from "react";
import { useNavigate } from "react-router-dom";
import { handlePokemonsListPage } from "../../Router/cordinator";

function DetailPage () {

    const navigate = useNavigate()

    return (
        <div>
            <button onClick={()=> handlePokemonsListPage(navigate)}>Todos os pokemons</button>
        </div>
    )
}

export default DetailPage