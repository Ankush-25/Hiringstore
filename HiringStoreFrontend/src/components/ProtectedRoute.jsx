import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../authContext';

/**
 * ProtectedRoute component to secure routes that require authentication
 * Redirects to login page if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="auth-loading">
        <div className="loading-spinner"></div>
        <p>Verifying your session...</p>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    // Save the current location to redirect back after login
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Render the protected content if authenticated
  return children;
};

export default ProtectedRoute; 