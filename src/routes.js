import { useState } from "react";
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function RequireAuth({ children, redirectTo }) {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  let isAuthenticated = token;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}


export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up/:type/:name" element={<SignUp />} />
        <Route path="/test" element={<h1>Teste</h1>} />
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