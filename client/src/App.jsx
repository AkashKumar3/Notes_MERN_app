import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
const App = () => {


  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/mynotes' Component={MainPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App