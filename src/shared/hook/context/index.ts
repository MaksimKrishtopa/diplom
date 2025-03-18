import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {IUser} from "@/shared/interface/context/user";

interface useAuthReturn {
    user: IUser | null,
    setUser: Dispatch<SetStateAction<IUser | null>>,
    authError: string | null,
    setAuthError: Dispatch<SetStateAction<string | null>>,
    userToken: string | null,
    isAuthenticated: boolean,
    login: (token: string) => void,
    logout: () => void,
}

const useAuth = ():useAuthReturn => {
    const [user, setUser] = useState<IUser | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);
    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!userToken);

    useEffect(() => {
        setIsAuthenticated(!!userToken);
    }, [userToken]);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setUserToken(token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUserToken(null);
        setUser(null);
        setAuthError(null);
    };

    return {
        user,
        setUser,
        authError,
        setAuthError,
        userToken,
        isAuthenticated,
        login,
        logout,
    };
};


export {useAuth}