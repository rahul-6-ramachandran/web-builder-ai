

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/home'
// import NavBar from './components/Navbar/NavBar'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

function App() {
 
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/login" element={<Signup/>} /> */}

      </Routes>
    </Router>
    </>
  )
}

export default App
