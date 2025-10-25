import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <About/> */}
    </>
  )
}

export default App
