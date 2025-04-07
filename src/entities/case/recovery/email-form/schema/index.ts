import * as yup from "yup";
import {emailValidation} from "@/shared/helpers/validation/common";
import {ObjectSchema} from "yup";
import {IResetPasswordEmailForm} from "@/shared/interface/enitites/user/form";

const resetPasswordEmailSchema: ObjectSchema<IResetPasswordEmailForm> = yup.object().shape({
    email: emailValidation(),
});

export {
    resetPasswordEmailSchema,
}