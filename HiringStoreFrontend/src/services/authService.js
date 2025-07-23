import axios from 'axios';
import { Api_url } from '../globalConfig';

const TOKEN_KEY = 'token';
const USER_ID_KEY = 'userId';
const USER_DATA_KEY = 'userData';

// Configure axios to send the token with every request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token expiration and unauthorized responses
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Token expired or invalid
      logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

/**
 * Login user and store JWT token
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Response with user data
 */
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${Api_url}/login`, { email, password });
    
    if (response.data && response.data.token) {
      // Store token and user data
      localStorage.setItem(TOKEN_KEY, response.data.token);
      localStorage.setItem(USER_ID_KEY, response.data.userId);
      
      // Store additional user data if available
      if (response.data.user) {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data.user));
      }
      
      // Set session expiration (based on token expiry, default 8 hours)
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 8);
      localStorage.setItem('expiresAt', expiresAt.toISOString());
      
      startTokenRefreshTimer();
    }
    
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Register a new user
 * @param {string} username - Username
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Response with user data
 */
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${Api_url}/signup`, { 
      username, 
      email, 
      password 
    });
    
    if (response.data && response.data.token) {
      // Store token and user data
      localStorage.setItem(TOKEN_KEY, response.data.token);
      localStorage.setItem(USER_ID_KEY, response.data.userId);
      
      // Store additional user data if available
      if (response.data.user) {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data.user));
      }
      
      // Set session expiration
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 8);
      localStorage.setItem('expiresAt', expiresAt.toISOString());
      
      startTokenRefreshTimer();
    }
    
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Logout user and clear session
 */
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(USER_DATA_KEY);
  localStorage.removeItem('expiresAt');
  
  // Clear any refresh timers
  if (window.tokenRefreshTimer) {
    clearTimeout(window.tokenRefreshTimer);
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean} - True if authenticated
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiresAt = localStorage.getItem('expiresAt');
  
  if (!token || !expiresAt) {
    return false;
  }
  
  // Check if token is expired
  const now = new Date();
  const expiration = new Date(expiresAt);
  
  if (now > expiration) {
    // Token expired, clear session
    logout();
    return false;
  }
  
  return true;
};

/**
 * Get current user data
 * @returns {Object|null} - User data or null if not authenticated
 */
export const getCurrentUser = () => {
  if (!isAuthenticated()) {
    return null;
  }
  
  const userId = localStorage.getItem(USER_ID_KEY);
  const userDataString = localStorage.getItem(USER_DATA_KEY);
  
  return {
    userId,
    ...(userDataString ? JSON.parse(userDataString) : {})
  };
};

/**
 * Refresh JWT token before it expires
 */
export const refreshToken = async () => {
  try {
    const response = await axios.post(`${Api_url}/refresh-token`, {
      userId: localStorage.getItem(USER_ID_KEY),
      token: localStorage.getItem(TOKEN_KEY)
    });
    
    if (response.data && response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token);
      
      // Update expiration time
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 8);
      localStorage.setItem('expiresAt', expiresAt.toISOString());
      
      startTokenRefreshTimer();
    }
  } catch (error) {
    console.error('Token refresh failed:', error);
    // If refresh fails, logout the user
    logout();
    window.location.href = '/login';
  }
};

/**
 * Start timer to refresh token before it expires
 */
const startTokenRefreshTimer = () => {
  if (window.tokenRefreshTimer) {
    clearTimeout(window.tokenRefreshTimer);
  }
  
  // Refresh token 30 minutes before expiration
  const expiresAt = new Date(localStorage.getItem('expiresAt'));
  const refreshTime = expiresAt.getTime() - new Date().getTime() - (30 * 60 * 1000);
  
  if (refreshTime > 0) {
    window.tokenRefreshTimer = setTimeout(refreshToken, refreshTime);
  } else {
    // Token is already close to expiration, refresh now
    refreshToken();
  }
};

// Initialize authentication state when the service is imported
if (isAuthenticated()) {
  startTokenRefreshTimer();
}

const authService = {
  login,
  register,
  logout,
  isAuthenticated,
  getCurrentUser,
  refreshToken
};

export default authService; 