import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoutes = ({ children }) => {

    const { isAuthenticated } = useAuth0();

    // const { loginWithRedirect } = useAuth0();

    return isAuthenticated ? children : <Navigate to='/' />;
}

export default ProtectedRoutes
