import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedAuth({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Check if user is not authenticated, then redirect to the /auth route
    if (!user.name) {
      navigate('/auth');
    }
  }, [user.name, navigate]); // useEffect dependencies

  // Render the protected content if the user is authenticated
  return user.name ? <>{children}</> : null;
}
