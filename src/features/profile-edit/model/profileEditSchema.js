import * as yup from "yup";

export const schema = yup.object({
    firstName: yup.string().trim().required('Укажите имя'),
    lastName:  yup.string().trim().required('Укажите фамилию'),

    email: yup
        .string()
        .trim()
        .lowercase()
        .required('Укажите email')
        .email('Некорректный email')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 'Некорректный email'),

    phone: yup
        .string()
        .required('Укажите номер телефона')
        .matches(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/, 'Формат: +7 999 123-45-67'),

    homePhone: yup
        .string()
        .nullable()
        .notRequired()
        .test('homePhoneFormat', 'Формат: 8 999 123-45-67', (value) => {
            if (!value) return true;
            return /^8 \d{3} \d{3}-\d{2}-\d{2}$/.test(value);
        }),

    personalAccount: yup
        .string()
        .required('Укажите лицевой счёт')
        .matches(/^\d{8,10}$/, 'Лицевой счёт — 8–10 цифр'),

    password: yup
        .string()
        .required('Укажите пароль')
        .min(6, 'Минимум 6 символов'),

    avatar: yup
        .mixed()
        .nullable()
        .test('fileSize', 'Файл слишком большой (макс. 5 МБ)', (value) =>
            !value || (value instanceof File && value.size <= 5 * 1024 * 1024)
        )
        .test('fileType', 'Только jpg, png, webp', (value) =>
            !value ||
            ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)
        ),
}).required();