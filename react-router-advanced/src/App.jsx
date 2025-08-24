import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Example</Link>
        <button
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
