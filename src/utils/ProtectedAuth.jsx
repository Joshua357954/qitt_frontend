import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedAuth({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Check if user is authenticated, then redirect to the home page
    if (user.name) {
      navigate('/');
    }
  }, [user.name, navigate]); // useEffect dependencies

  // Render the protected content if the user is not authenticated
  return user.name ? null : <>{children}</>;
}
