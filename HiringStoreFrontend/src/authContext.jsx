import { createContext, useContext, useEffect, useState } from "react";
import authService from "./services/authService";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is authenticated on mount
    const checkAuthStatus = () => {
      try {
        if (authService.isAuthenticated()) {
          const userData = authService.getCurrentUser();
          setCurrentUser(userData);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setError("Session validation failed");
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      setCurrentUser(response.userId ? { userId: response.userId, ...response.user } : response);
      return response;
    } catch (err) {
      setError(err.response?.data || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (username, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.register(username, email, password);
      setCurrentUser(response.userId ? { userId: response.userId, ...response.user } : response);
      return response;
    } catch (err) {
      setError(err.response?.data || "Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    setCurrentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};