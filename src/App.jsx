import { useState } from 'react'
import './App1.css'
import HeaderPage from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPage/>
    </>
  )
}

export default App
