import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Props:
 * - isAuthenticated: boolean
 * - children: React component(s) to render if authenticated
 */
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirect unauthenticated users to home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
