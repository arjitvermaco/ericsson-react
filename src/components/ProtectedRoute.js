import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <p>This is a sidebar</p>
            {children}
        </div>
    )
}
