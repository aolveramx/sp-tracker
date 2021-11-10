import styled from 'styled-components'

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  height: 100vh;

  @media(max-width: 1045px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`