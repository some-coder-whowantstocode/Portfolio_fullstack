import './App.css'
import Nav from './components/Nav'
import Body from './pages/Body'
import LandingPage from './pages/LandingPage'

function App() {

  
  return (
    <div className=' overflow-x-hidden transition-all duration-400'>
      <LandingPage />
      <Nav/>
      <Body/>
    </div>
  )
}

export default App
