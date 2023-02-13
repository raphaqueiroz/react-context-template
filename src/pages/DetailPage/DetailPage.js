import React from "react";
import Header from "../../components/Header/Header"
import { useLocation, useNavigate } from "react-router-dom";
import { handlePokemonsListPage } from "../../Router/cordinator";
import { getTypes } from "../../utils/ReturnPokemonType";
import { Container, Div, Img, ImgContainer, PokemonProfilePic, PokemonType, Section, SectionMoves } from "./styled";

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
        <>
        <Header/>
        
        <Container>

            <ImgContainer>
                <Img src = {sprites.frontDefault} alt = {name}/>
                <Img src = {sprites.backDefault} alt = {name} />
            </ImgContainer>

            
            <Section>

                <h2>Base Stats</h2>

                <p>{stats[0].name} : {stats[0].base_stat}</p>
                <p>{stats[1].name} : {stats[1].base_stat}</p>
                <p>{stats[2].name} : {stats[2].base_stat}</p>
                <p>{stats[3].name} : {stats[3].base_stat}</p>
                <p>{stats[4].name} : {stats[4].base_stat}</p>
                <p>{stats[5].name} : {stats[5].base_stat}</p>
            </Section>

            <Div>
                <div>
                    <p>#{id}</p>
                    <h2>{name}</h2>
                    <p>{types.map((type) => {
                        return (
                            <PokemonType key = {type} src = {getTypes(type)} alt = ""/>
                        )
                    })}</p>
                </div>

                <SectionMoves>
                <p>{moves.map((move) => {
                    return (
                        <p>{move}</p>
                    )
                })}</p>
                </SectionMoves>
            </Div>

            <div>
            <PokemonProfilePic src = {sprites.default} alt = {name} />

            </div>


            <button onClick={()=> handlePokemonsListPage(navigate)}>Todos os pokemons</button>
        </Container>
        </>
    )
}

export default DetailPage