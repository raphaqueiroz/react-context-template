import styled from "styled-components";

export const Container = styled.div`
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 2px 1px 10px;
  border-radius: 5px;

  img {
    height: 200px;
    width: 100%;
    border: 1px solid #9B9B9A;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #BE8CFF
    
  }

  div {
    display: flex;
    width: 100%;

  button {
      
    font-family:Arial;
    width:50%;
    height:40px;
    border-width:1px;
    color:#ffffff;
    border-color:#337fed;
    font-weight:bold;
    box-shadow:inset 0px 1px 0px 0px #97c4fe;
    text-shadow:inset 0px 1px 0px #1570cd;
    background:linear-gradient(#3d94f6, #1e62d0);
    font-size:15px;
      
    }
  }
`;