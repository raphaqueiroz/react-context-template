export function handlePokemonsListPage (navigate) {
    navigate("/")
}

export function handlePokedexPage (navigate) {
    navigate("/pokedex")
}

export function handleDetailPage (navigate, response = "") {
    navigate("/details",response)

}

