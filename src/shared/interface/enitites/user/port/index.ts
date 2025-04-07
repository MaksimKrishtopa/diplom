import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";

type IAuthPort = Pick<IUserDto, 'email' | 'password'>

interface IUserPort {
    real_name:string;
    description: string;
    birth_date: string;
}

type IUserEmailPort = Pick<IUserDto, 'email'>

interface IUserEmailCodePort {
    code: string
}

type IUserResetPasswordPort = Pick<IUserDto, 'password' | 'email'> & IUserEmailCodePort

export type {
    IAuthPort,
    IUserPort,
    IUserEmailPort,
    IUserResetPasswordPort,
    IUserEmailCodePort
}