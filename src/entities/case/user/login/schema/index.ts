import * as yup from "yup";
import {reqStringValidation} from "@/shared/helpers/validation/common";

const loginSchema = yup.object().shape({
    email: reqStringValidation(),
    password: reqStringValidation(),
});

export {
    loginSchema
}