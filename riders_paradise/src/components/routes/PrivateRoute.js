import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    let currentUser = useSelector((state) => state.user.currentUser);

    console.log(currentUser)

    if (currentUser) {
        return <Outlet />
    } else {
        return <Navigate to={"/login"} />
    }
}

export default PrivateRoute;