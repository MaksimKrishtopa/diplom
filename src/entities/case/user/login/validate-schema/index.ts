import * as yup from "yup";


const regExpEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
const regExpPassword = new RegExp(/^[0-9a-zA-Z-_!?]+/)

export const loginSchema = yup.object().shape({
    email: yup.string().required('Обязательное поле').email('Неверный формат email').matches(regExpEmail,'Неверный email или пароль'),
    password: yup.string().required('Обязательное поле').min(5, 'Минимум 5 символов').matches(regExpPassword,'Неверный email или пароль'),
});

