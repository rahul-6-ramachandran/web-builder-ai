import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
// import NavBar from './components/Navbar/NavBar'
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Userdashboard from "./components/Dashboard/UserDashboard";
import Dashboard from "./components/Layouts/DashboardLayout";
import Projects from "./components/Dashboard/Projects/Projects";

import EditorLayout from "./components/Layouts/EditorLayout";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import PublicRoute from "./components/Auth/PublicRoute";
import CreateProject from "./components/Editor/forms/createProject";
import { PROJECT_PATH } from "./common";
import DefaultEditor from "./components/Editor/Editor";

function App() {
  return (
    <>
      <div className="App">
        <ToastContainer />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            <Route
              path="/:id"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Userdashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="projects"
                element={
                  <ProtectedRoute>
                    <Projects />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path={PROJECT_PATH.PROJECT_EDITOR}
              element={
                <ProtectedRoute>
                  <EditorLayout />
                </ProtectedRoute>
              }
            >
              <Route index element = {<ProtectedRoute><DefaultEditor/></ProtectedRoute>}/>
              <Route path={PROJECT_PATH.CREATE_PROJECT} element = {<ProtectedRoute><CreateProject/></ProtectedRoute>}/>
            </Route>

            

            {/* <Route path=''/> */}
            {/* </Route> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
