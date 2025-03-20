import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";

interface IUserContextType {
    user: IUserDto | null;
    setUser: (user: IUserDto | null) => void;
    authError: string | null;
    setAuthError: (error: string | null) => void;
    userToken: string  | null;
    userId: string | null;
    isAuthenticated: boolean;
    login: (data:IUserDto) => void;
    logout: () => void;
}

export type {IUserContextType}