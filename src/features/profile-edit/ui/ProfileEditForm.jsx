import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './ProfileEditForm.module.css';

// ── Схема валидации (yup) ────────────────────────────────────────────────
const schema = yup.object({
    firstName: yup.string().trim().required('Укажите имя'),
    lastName:  yup.string().trim().required('Укажите фамилию'),

    email: yup
        .string()
        .required('Укажите email')
        .email('Некорректный email'),

    phone: yup
        .string()
        .required('Укажите номер телефона')
        .matches(/^\+7\s?\d{3}\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/, 'Формат: +7 999 123-45-67'),

    homePhone: yup.string().nullable().notRequired(), // опционально

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

const ProfileEditForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
        setValue,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: 'Валерия',
            lastName: 'Салаватуллина',
            email: 'salavat@info.ru',
            phone: '+7 999 156-19-92',
            homePhone: '8 843 561-42-43',
            personalAccount: '13455794',
            password: '`Timur',
            avatar: null,
        },
        mode: 'onChange', // или 'onBlur' / 'onSubmit'
    });

    const avatarPreview = watch('avatar');

    const onSubmit = async (data) => {
        // data.avatar — это File объект, если выбрали файл
        console.log('Отправляем:', data);

        // Здесь будет fetch / axios на сервер
        // await api.updateProfile(data);

        // После успеха можно reset() или показать тост
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue('avatar', file, { shouldValidate: true });
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="firstName">Ваше имя</label>
                    <input
                        id="firstName"
                        {...register('firstName')}
                        placeholder="Валерия"
                    />
                    {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                        id="lastName"
                        {...register('lastName')}
                        placeholder="Салаватуллина"
                    />
                    {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Электронная почта</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="salavat@info.ru"
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="phone">Номер телефона</label>
                    <input
                        id="phone"
                        {...register('phone')}
                        placeholder="+7 999 156-19-92"
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="homePhone">Домашний телефон</label>
                    <input
                        id="homePhone"
                        {...register('homePhone')}
                        placeholder="8 843 561-42-43"
                    />
                    {errors.homePhone && <span className={styles.error}>{errors.homePhone.message}</span>}
                </div>

                <div className={`${styles.field} ${styles.field__avatar}`}>
                    <div className={styles.labelWrapper}>
                        <label>Фотография</label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleFileChange}
                            className={styles.fileInput}
                            id="avatar"
                        />
                        <label htmlFor="avatar" className={styles.fileLabel}>
                            Загрузить фото
                        </label>
                    </div>

                    <div className={styles.avatarWrapper}>
                        {avatarPreview instanceof File ? (
                            <img
                                src={URL.createObjectURL(avatarPreview)}
                                alt="Превью"
                                className={styles.preview}
                            />
                        ) : (
                            <div className={styles.placeholder}>Фото</div>
                        )}


                    </div>
                    {errors.avatar && <span className={styles.error}>{errors.avatar.message}</span>}
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="personalAccount">Лицевой счет</label>
                    <input
                        id="personalAccount"
                        {...register('personalAccount')}
                        placeholder="13455794"
                    />
                    {errors.personalAccount && (
                        <span className={styles.error}>{errors.personalAccount.message}</span>
                    )}
                </div>

                <div className={styles.field}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password')}
                        placeholder="Новый пароль (если меняете)"
                    />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </div>
            </div>

            <div className={styles.actions}>
                <button
                    type="submit"
                    className={styles.submit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Сохраняем...' : 'Сохранить'}
                </button>

                <button
                    type="button"
                    className={styles.cancel}
                    onClick={() => reset()}
                    disabled={isSubmitting}
                >
                    Отменить изменения
                </button>
            </div>
        </form>
    );
};

export default ProfileEditForm;