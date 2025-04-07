import * as yup from 'yup';

export const reqStringValidation = (
    name: string,
    max: number,
    regexpValue: RegExp,
) => {
    return yup
        .string()
        .required(`Введите ${name}`)
        .matches(regexpValue, 'Введены некорректные символы')
        .max(max, `Поле должно содержать не более ${max} символов`);
};

export const loginValidation = (req:string,match:string,regexp:RegExp) => {
    return yup
        .string()
        .required(req)
        .matches(regexp,match);
}