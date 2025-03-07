import {ReactNode, useContext, useEffect} from 'react';
import Button from "@/shared/components/button";
import {UserContext} from "@/shared/hook";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import Menu from "@/widget/menu";

const HomePage = (): ReactNode => {
    const { isAuthenticated,logout } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ERouterPath.LOGIN_PAGE);
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <Menu/>
            <p>Лента</p>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
};

export default HomePage;
