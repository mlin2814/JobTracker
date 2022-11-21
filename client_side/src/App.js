import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Skill from './pages/Skill'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <SignUp /> : <Navigate to="/" />} 
            />
            <Route 
              path="/contacts" 
              element={user ? <Contact /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/skills" 
              element={user ? <Skill /> : <Navigate to="/login" />} 
            />
          </Routes>
          {/* <Routes>
            <Route 
              path="/jobs" 
              element={<Home />} 
            />
          </Routes> */}
          {/* <Routes>
            <Route 
              path="/contacts" 
              element={<Contact />} 
            />
          </Routes> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


