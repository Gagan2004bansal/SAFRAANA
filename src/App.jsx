import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Partner from './Components/Partner'
import Product from './Components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/partner' element={<Partner/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
