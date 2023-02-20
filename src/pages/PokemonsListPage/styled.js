import styled from "styled-components";

export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

;

