import { Logo } from '../styles/layout/Logo.styled'
import { StyledNavbar } from '../styles/layout/Navbar.styled'
import { Container } from '../styles/layout/Container.styled'

const logout_url = 'http://localhost:3000'

const Navbar = () => {
  return (
    <Container>
      <StyledNavbar>
        <Logo href={logout_url}>
          <h1>SP Tracker</h1>
        </Logo>
      </StyledNavbar>
    </Container>
  )
}

export default Navbar
