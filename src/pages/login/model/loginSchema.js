import * as yup from 'yup';

//Правила валидации полей формы Логин
export const loginSchema = yup
    .object({
        personalAccount: yup
            .string()
            .trim()
            .required('Укажите лицевой счет')
            .matches(/^\d{8,10}$/, 'Лицевой счет — 8–10 цифр'),
        password: yup
            .string()
            .required('Укажите пароль')
            .min(6, 'Минимум 6 символов'),
    })
    .required();
