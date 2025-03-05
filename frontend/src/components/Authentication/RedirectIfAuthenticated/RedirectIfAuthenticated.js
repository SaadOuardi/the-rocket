import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuthenticated = () => {
    const isAuthenticated = localStorage.getItem("token");

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectIfAuthenticated;
