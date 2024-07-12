import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
    const { pathname } = useLocation();
    const { auth } = useAuth() || JSON.parse(sessionStorage.getItem('auth'));

    return auth?.user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ requestedUrl: pathname, message: 'Please login to continue!' }} replace={true} />
    );
};

export default AuthLayout;
