import { createContext, useState, ReactNode } from 'react';


type User = {
    id: string;
    email: string;
    name: string;
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    authError: string | null;
    setAuthError: (error: string | null) => void;
};

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    authError: null,
    setAuthError: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser, authError, setAuthError }}>
            {children}
        </UserContext.Provider>
    );
};