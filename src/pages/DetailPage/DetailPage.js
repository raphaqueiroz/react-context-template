import React from "react";
import Header from "../../components/Header/Header"
import { useLocation, useNavigate } from "react-router-dom";
import { handlePokemonsListPage } from "../../Router/cordinator";
import { getTypes } from "../../utils/ReturnPokemonType";
import { Container, Div, IdMovesContainer, Img, ImgContainer, Pokeball, PokemonProfilePic, PokemonType, Section, SectionMoves } from "./styled";
import { getColors } from "../../utils/ReturnCardColor";

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

        <h2>Detalhes</h2>
        
        <Container color = {getColors(types[0])}>

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

            <IdMovesContainer>
            <Div>
                
                    <h3>#{id}</h3>
                    <h2>{name}</h2>
                    <p>{types.map((type) => {
                        return (
                            <PokemonType key = {type} src = {getTypes(type)} alt = ""/>
                        )
                    })}</p>
                </Div>

                <SectionMoves>
                <p>{moves.map((move) => {
                    return (
                        <p>{move}</p>
                    )
                })}</p>
                </SectionMoves>
                </IdMovesContainer>

        <Pokeball src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16c93e3b-ce11-48da-a4a8-ad1dca9081ec/dmh4ei-666ff8b3-1e52-4318-93a8-50fa1f33ab6c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2YzkzZTNiLWNlMTEtNDhkYS1hNGE4LWFkMWRjYTkwODFlY1wvZG1oNGVpLTY2NmZmOGIzLTFlNTItNDMxOC05M2E4LTUwZmExZjMzYWI2Yy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ktgv0vpDRHcZ4SHaIFm-Zqz_gyM92dOk7Z3jFxi-4a0" alt = "pokeball" />


            <div>
            <PokemonProfilePic src = {sprites.default} alt = {name} />
            </div>

        </Container>
        </>
    )
}

export default DetailPage