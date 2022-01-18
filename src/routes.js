import { useState } from "react";
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import { GlobalProvider } from './contexts/GlobalContext';
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default function MyRoutes() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth redirectTo="/">
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}