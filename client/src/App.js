import Dashboard from './components/Dashboard'
import Navbar from './components/layout/Navbar'
import Login from './components/Login'

import { DashboardContainer } from './components/styles/Dashboard/DashboardContainer.styled'
import GlobalStyles from './components/styles/layout/Global.styled'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <DashboardContainer>
        <Navbar />
        {code ? <Dashboard code={code} /> : <Login />}
      </DashboardContainer>
    </div>
  )
}

export default App
