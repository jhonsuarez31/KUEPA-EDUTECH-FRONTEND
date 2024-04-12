import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface PublicRouteProps {
    children: ReactNode;
    [key: string]: unknown; // Permite cualquier otra propiedad
}

export const PublicRoute = ({ children}: PublicRouteProps) => {
    // eslint-disable-next-line no-constant-condition
    return !false ? children : <Navigate to="/marvel" />;
}
