import { useState } from "react";

/**
 * Simple hook to simulate authentication
 */
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

export default useAuth;
