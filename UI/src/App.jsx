import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SccrollReveal from './Components/SccrollReveal.jsx'
import TextPopBtn from './Buttons/TextPopBtn.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextPopBtn height={1.5} width={10} text={"apply"} ></TextPopBtn>
    </>
  )
}

export default App
