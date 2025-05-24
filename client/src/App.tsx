

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

import EditorLayout from './components/Layouts/EditorLayout'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import PublicRoute from './components/Auth/PublicRoute'
import { useAuth } from './store/userContext'

function App() {
const {loading} = useAuth()
  return (
    <>
     <div className='App'>

   
     <ToastContainer />

   <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={
    
          <PublicRoute>
            <Login/>
            </PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />



        <Route path='/:id' element={
          <ProtectedRoute>
          <Dashboard/>
          </ProtectedRoute>
        }
          >
          
            <Route index element={
                        <ProtectedRoute>
                        <Userdashboard/>
                        </ProtectedRoute>
                        }
                        />
            <Route  path='projects' element={<ProtectedRoute>
              <Projects/>
              </ProtectedRoute>}/>
            
        </Route>  


        <Route  path='editor/:id' element={<ProtectedRoute>
          <EditorLayout/>
          </ProtectedRoute>
        }/>
        
       
        {/* <Route path=''/> */}
        {/* </Route> */}
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
