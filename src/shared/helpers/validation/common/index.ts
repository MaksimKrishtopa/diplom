import * as yup from 'yup';
import {regexp} from "@/shared/helpers/regexp";
import {EValidationErrorValues} from "@/shared/enum/error-values";
import {IValidation} from "@/shared/interface/validation";

const reqStringValidation = () => yup
    .string()
    .required(EValidationErrorValues.REQUIRED)

const emailValidation = () => yup
    .string()
    .required(EValidationErrorValues.REQUIRED)
    .matches(regexp.email, EValidationErrorValues.INCORRECT_VALUE);

const passwordValidation = ({min, max}: IValidation) => yup
    .string()
    .required(EValidationErrorValues.REQUIRED)
    .max(max, `Поле должно содержать от ${min} до ${max} символов`)
    .min(min, `Поле должно содержать от ${min} до ${max} символов`)
    .matches(regexp.password, EValidationErrorValues.INCORRECT_VALUE)

const passwordRepeatValidation = (refField: string = 'password') =>
    yup.string()
        .required(EValidationErrorValues.REQUIRED)
        .oneOf([yup.ref(refField), EValidationErrorValues.PASSWORDS_UNMATCH]);


export {
    emailValidation,
    passwordValidation,
    passwordRepeatValidation,
    reqStringValidation
}