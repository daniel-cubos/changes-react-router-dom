import { useState } from "react";
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';

function RequireAuth({ children, redirectTo }) {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  let isAuthenticated = token;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}


export default function MyRoutes() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}