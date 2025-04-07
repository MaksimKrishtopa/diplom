import * as yup from "yup";
import {passwordRepeatValidation, passwordValidation} from "@/shared/helpers/validation/common";
import {ObjectSchema} from "yup";
import {IUserResetPasswordForm} from "@/shared/interface/enitites/user/form";

const resetPasswordSchema: ObjectSchema<IUserResetPasswordForm> = yup.object().shape({
    password: passwordValidation({min: 8, max: 100}),
    password_repeat: passwordRepeatValidation()
});

export {
    resetPasswordSchema,
}