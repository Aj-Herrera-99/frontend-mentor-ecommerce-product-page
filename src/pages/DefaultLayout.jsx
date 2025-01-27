import { Outlet } from "react-router-dom";
import HeaderComp from "../components/HeaderComp";
import MainComp from "../components/MainComp";

function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <MainComp>
                <Outlet />
            </MainComp>
        </>
    );
}

export default DefaultLayout;
