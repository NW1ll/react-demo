import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";

function BaseLayout() {
    const Navigate = useNavigate();
    const location = useLocation();
    console.log( Navigate,location )
    // ...
    return (
        <>
            base
            <br/>
            <Outlet/>
        </>

    );
}
export default BaseLayout;