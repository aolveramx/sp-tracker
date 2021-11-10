import styled from 'styled-components'

export const StyledNavbar = styled.nav`
 .navbar {
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
}

& h1 {
  color: #33CC33;
  transition: all 0.5s;
}

& h1:hover {
  color: #fff;
}
`