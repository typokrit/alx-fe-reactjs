import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Example</Link>
        <button
          onClick={isAuthenticated ? logout : login}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
