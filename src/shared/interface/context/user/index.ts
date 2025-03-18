interface IUser  {
    id: string;
    email: string;
}


interface IUserContextType {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    authError: string | null;
    setAuthError: (error: string | null) => void;
    userToken: string  | null;
    isAuthenticated: boolean;
    login: (token:string) => void;
    logout: () => void;
}

export type {IUser,IUserContextType}