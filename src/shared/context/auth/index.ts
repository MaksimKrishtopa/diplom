import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";

interface useAuthReturn {
    user: IUserDto | null,
    setUser: Dispatch<SetStateAction<IUserDto | null>>,
    authError: string | null,
    setAuthError: Dispatch<SetStateAction<string | null>>,
    userToken: string | null,
    isAuthenticated: boolean,
    userId: string | null,
    login: (data:IUserDto) => void,
    logout: () => void,
}

const useAuth = ():useAuthReturn => {
    const [user, setUser] = useState<IUserDto | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);
    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('token'));
    const [userId, setUserId] = useState<string | null>(localStorage.getItem('id'))
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!userToken);

    useEffect(() => {
        setIsAuthenticated(!!userToken);
    }, [userToken]);

    const login = (data:IUserDto) => {
        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('id', data.id)
        setUserToken(data.accessToken);
        setUserId(data.id);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        setUserToken(null);
        setUser(null);
        setUserId(null);
        setAuthError(null);
    };

    return {
        user,
        setUser,
        authError,
        setAuthError,
        userToken,
        userId,
        isAuthenticated,
        login,
        logout,
    };
};


export {useAuth}