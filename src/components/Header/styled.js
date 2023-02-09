import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  height: 70px;
  font-size: 24px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-family:Arial;
    width:10vw;
    height:40px;
    position: absolute;
    right: 0;
    border-width:1px;
    color:#ffffff;
    border-color:#74b807;
    font-weight:bold;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
    box-shadow:inset 0px 1px 0px 0px #a4e271;
    text-shadow:inset 0px 1px 0px #528009;
    background:linear-gradient(#89c403, #77a809);
    font-size:15px;
  }
`;
