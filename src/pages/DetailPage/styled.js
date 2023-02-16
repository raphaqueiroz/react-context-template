import styled from "styled-components";



export const Container = styled.div`

    display: grid;
    border-radius: 8px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    background-color: ${(props) => props.color}

`

export const ImgContainer = styled.div`

display: grid;
grid-template-rows: repeat(2, 1fr);
grid-gap: 5px;
justify-items: center;
margin-top: 10px;
margin-bottom: 10px;
`

export const Img = styled.img`

height: 40vh;
width: 40vw:
border: 1px solid black;
border-radius: 8px;
background: #FFFFFF
`

export const Section = styled.section`

display: grid;
background: #FFFFFF;
border-radius: 8px;
justify-items: center;
margin-top: 10px; 
margin-bottom: 10px;
margin-right: 15px
`

export const SectionMoves = styled.div`

display: grid;
justify-items: center;
align-items: center;
background: #FFFFFF;
border-radius: 8px;
width: 20vw;
height: 50vh;
margin-top: 10px;
margin-bottom: 10px;

p{
    background-color: #ECECEC;
    margin: 10px;
    border-radius: 8px;
    text-align: center;
    z-index: 1;

}
`

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

`;

export const PokemonProfilePic = styled.img`

position: absolute;
height: 250px; 
width: 250px;
left: 980px;
top: 0px;
`

export const IdMovesContainer = styled.div`
z-index: 1;
`

export const Div = styled.div`

display: grid;
grid-template-rows: 1fr, 5fr;
width: 20vw;
height: 29vh;
margin-top: 10px;
justify-items: end;



`

export const Pokeball = styled.img`
position: absolute;
width: 500.31px;
height: 500.31px;
left: 750.66px;
top: 150px;
opacity: 0.60;
transform: rotate(35deg);
`;