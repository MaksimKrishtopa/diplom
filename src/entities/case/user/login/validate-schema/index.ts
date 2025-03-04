import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: yup.string().min(8, 'Минимум 8 символов').required('Обязательное поле'),
});

