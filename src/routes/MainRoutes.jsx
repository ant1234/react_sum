import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const MainRoutes = () => {
    return(
        <>
        <MainHeader />
        <Outlet />
    </>

    );

};

export default MainRoutes;