import { useState } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PrivateRoute from './pages/PrivateRoute'
import Login from './pages/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <h1>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h1>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        Toggle Auth
      </button>

      {/*Navigation*/}
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/private-route">Private Route</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      {/*Routes*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="private-route"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="login"
          element={
            !isAuthenticated ? (
              <Login login={login} />
            ) : (
              <Navigate to="/private-route" />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
