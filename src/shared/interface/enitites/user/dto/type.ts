interface IUserDto  {
    id: string,
    accessToken: string,
    email: string;
    password: string;
    user_image?: null,
    user_name: string;
    user_real_name?:string;
    user_description?: string;
    following_count: number;
    followers_count: number;
    user_birth_date?: string;
}
export type {IUserDto}


