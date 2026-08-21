import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SccrollReveal from './Components/SccrollReveal.jsx'
import TextPopBtn from './Buttons/TextPopBtn.jsx'
import ScrollingCards from './Cards/ScrollingCards.jsx'
import CursorTracker from './LandingPages/CursorTracker.jsx'
import FlotingNavbar from './NavBars/FlotingNavbar.jsx'
import './App.css'
import GenRandomTxt from './Texts/GenRandomTxt.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TextPopBtn height={1.5} width={6} text={"apply"} ></TextPopBtn> */}
      <FlotingNavbar></FlotingNavbar>
      <CursorTracker></CursorTracker>
    </>
  )
}

export default App
