import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";

type IAuthPort = Pick<IUserDto, 'email' | 'password'>

interface IUserPort {
    real_name:string;
    description: string;
    birth_date: string;
}

export type {IAuthPort,IUserPort}