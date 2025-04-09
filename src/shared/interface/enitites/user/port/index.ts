import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";

type IAuthPort = Pick<IUserDto, 'email' | 'password'>

interface IUserPort {
    real_name:string;
    description: string;
    birth_date: string;
}

interface IUserImagePort {
    image: File;
}

interface IUserPasswordPort {
    old_password: string,
    new_password: string;
}

interface IUserInfoPort {
    real_name?:string;
    description?: string;
    birth_date?: string;
}


export type {IAuthPort,IUserPort, IUserInfoPort,IUserPasswordPort,IUserImagePort}