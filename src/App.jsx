import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Users from './Users'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
   <Users/>
    </>
  )
}

export default App
