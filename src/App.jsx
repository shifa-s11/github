import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Users from './Routes/Users'
import UsersData from './Routes/UsersData'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Nav/>
    <Routes>
<Route path='/github/' Component={Users} />
<Route path='/github/:name' Component={UsersData}/>
    </Routes>
       



    </>
  )
}

export default App
