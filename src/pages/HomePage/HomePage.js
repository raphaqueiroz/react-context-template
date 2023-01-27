import Card from "../../components/Card/Card";
import { Container } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function HomePage(props) {
 // const { pokelist, addToPokedex, pokedex } = props;
  const context = useContext(GlobalContext)

  const {pokelist, pokedex, addToPokedex} = context //desestruturei somente o que será utilizado.



  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
