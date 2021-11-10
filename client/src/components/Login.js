import { LoginButton } from './styles/Login/LoginButton.styled'
import { HomeContainer } from './styles/Login/HomeContainer.styled'

const auth_url =
  'https://accounts.spotify.com/authorize?client_id=1fae6c9d97bd4d35b7771fd0a0ba8ba6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const Login = () => {
  return (
    <HomeContainer>
      <LoginButton href={auth_url}>Login with Spotify</LoginButton>
    </HomeContainer>
  )
}

export default Login
