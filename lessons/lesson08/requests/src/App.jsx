import { useState } from 'react'
import './App.css'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersPage  from './pages/UsersPage/UsersPage'
import CepPage from './pages/cepPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <h1>Welcome</h1>} />
        <Route path='/users' element={ <UsersPage />} />
        <Route path='/cep' element={ <CepPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
