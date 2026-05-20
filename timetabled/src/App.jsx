import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Itinerary for Weekly Road to SWE</h1>
        <h2>Welcome to your roadmap to SWE, Rain! Check out this calendar to get an idea of 
          what you need to do to become an SWE!
        </h2>

        <Calendar />
      </div>
    </>
  )
}

export default App
