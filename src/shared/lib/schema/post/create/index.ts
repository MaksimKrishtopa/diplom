import * as yup from "yup";

export const postSchema = yup.object().shape({
    image: yup
        .mixed()
        .required("Загрузите изображение")
        .test("fileExist", "Файл обязателен", (value) => value && value.length > 0),
    text: yup.string().nullable(),
    location: yup.string().nullable(),
    theme_ids: yup.array()
        .of(yup.number())
        .max(5, "Можно выбрать до 5 тем")
        .nullable()
});
