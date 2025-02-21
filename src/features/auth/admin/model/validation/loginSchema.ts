import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Неверный формат email')
        .required('Обязательное поле'),

    password: yup
        .string()
        .min(6, 'Минимум 6 символов')
        .max(32, 'Максимум 32 символа')
        .required('Обязательное поле')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
            "Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ"
        ),
});

