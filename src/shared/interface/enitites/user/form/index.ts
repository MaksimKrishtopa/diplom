import {
    IAuthPort,
    IUserEmailCodePort,
    IUserEmailPort,
    IUserResetPasswordPort
} from "@/shared/interface/enitites/user/port";

type IUserForm = IAuthPort

type IResetPasswordEmailForm = IUserEmailPort

type IResetPasswordCodeForm = IUserEmailCodePort

type IUserResetPasswordForm = Pick<IUserResetPasswordPort, "password"> & {password_repeat: string}

export type {
    IResetPasswordEmailForm,
    IUserForm,
    IResetPasswordCodeForm,
    IUserResetPasswordForm
}