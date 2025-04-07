import * as yup from "yup";
import {reqStringValidation} from "@/shared/helpers/validation/common";
import {ObjectSchema} from "yup";
import {IResetPasswordCodeForm} from "@/shared/interface/enitites/user/form";

const resetPasswordCodeSchema: ObjectSchema<IResetPasswordCodeForm> = yup.object().shape({
    code: reqStringValidation(),
});

export {
    resetPasswordCodeSchema,
}