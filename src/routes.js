import { useState, createContext } from "react";
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}


export default function MyRoutes() {
  const GlobalContext = createContext({});

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [name, setName] = useState('Daniel');

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ token, setToken, name, setName }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth redirectTo="/">
                <Dashboard GlobalContext={GlobalContext} />
              </RequireAuth>
            }
          />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  )
}