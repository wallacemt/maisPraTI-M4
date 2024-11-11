import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Servicess/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css'
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './components/Login.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={
              <ProtectedRoute>
                <Services/>
              </ProtectedRoute>
            }/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
