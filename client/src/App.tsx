

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/home'
// import NavBar from './components/Navbar/NavBar'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Userdashboard from './components/Dashboard/UserDashboard'
import Dashboard from './components/Layouts/DashboardLayout'
import Projects from './components/Dashboard/Projects/Projects'

function App() {
 
  return (
    <>
     <div className='App'>

   
     <ToastContainer />

   <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/login" element={<Signup/>} /> */}



        <Route path='/dashboard/:id' element={<Dashboard/>}>
          
            <Route index element={<Userdashboard/>}/>
            <Route  path='projects' element={<Projects/>}/>
        </Route>  
        {/* <Route path=''/> */}
        {/* </Route> */}
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
