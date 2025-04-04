import * as yup from 'yup';
import {loginValidation} from "@/shared/lib/schema/common";
import {regexp} from "@/shared/helpers/regexp";

export const loginSchema = yup.object().shape({
    email: loginValidation('Email обязателен','Некорректный email',regexp.email),
    password: loginValidation('Пароль обязателен','Некорректный пароль',regexp.password),
});
