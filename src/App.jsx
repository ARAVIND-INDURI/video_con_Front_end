import { useState } from 'react'
import Register from '../public/components/register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register/>
    </>
  )
}


export default App
