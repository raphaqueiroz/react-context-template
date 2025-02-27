import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 35px 10px;
  color: #ffffff;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  
    width: 150px;
  }
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 30vh;
  width: 15vw;
  opacity: 0.60;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  
    height: 37vh;
    width: 40vw;

  }
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const DetailButton = styled.button`

box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
`

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: -10;
  z-index: 1;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  
    width: 160px;
    height: 160px;
    position: absolute;
    top: -50px;
    right: 0;
  }
`;

export const InfoContainer = styled.div`


  z-index: 1;

`