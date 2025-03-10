import {createContext, PropsWithChildren, useEffect, useState} from 'react';


interface IUser  {
    id: string;
    email: string;
}

interface IUserContextType {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    authError: string | null;
    setAuthError: (error: string | null) => void;
    userToken: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export const UserAuthContext = createContext<IUserContextType>({
    user: null,
    setUser: () => {},
    authError: null,
    setAuthError: () => {},
    isAuthenticated: false,
    userToken: null,
    login: () => {},
    logout: () => {},
})


const UserAuthContextProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);
    const [userToken, setUserToken] =  useState<string | null>(localStorage.getItem('userToken') || null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!userToken);

    useEffect(() => {
        setIsAuthenticated(!!userToken);
    }, [userToken]);

    const login = (token:string) => {
        localStorage.setItem('userToken', token);
        setUserToken(token);
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setUserToken(null);
        setUser(null);
        setAuthError(null);
    };

    const contextValue: IUserContextType = {
        user,
        setUser,
        authError,
        setAuthError,
        userToken,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <UserAuthContext.Provider value={contextValue}>
            {children}
        </UserAuthContext.Provider>
    );
};


export default UserAuthContextProvider


