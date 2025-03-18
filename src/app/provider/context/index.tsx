import {createContext, PropsWithChildren} from 'react';
import {IUserContextType} from "@/shared/interface/context/user";
import {useAuth} from "@/shared/hook/context";


export const UserAuthContext = createContext<IUserContextType>({
    user: null,
    setUser: () => {},
    authError: null,
    setAuthError: () => {},
    userToken: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});


const UserAuthContextProvider = ({children}: PropsWithChildren) => {
    const auth = useAuth();
    return (
        <UserAuthContext.Provider value={auth}>
            {children}
        </UserAuthContext.Provider>
    );
};


export default UserAuthContextProvider


