import {createContext, ReactNode, useEffect, useState} from 'react';


type User = {
    id: string;
    email: string;
    password: string;
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    authError: string | null;
    setAuthError: (error: string | null) => void;
    userToken: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
};

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    authError: null,
    setAuthError: () => {},
    isAuthenticated: false,
    userToken: null,
    login: () => {},
    logout: () => {},
});


export const UserContextProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
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

    const contextValue: UserContextType = {
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
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};


