import React, { useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { yupResolver } from '@hookform/resolvers/yup';
import {schema} from "@/features/profile-edit/model/profileEditSchema.js";
import styles from './ProfileEditForm.module.css';
import Toast from '@/widgets/toast';
import {ProfileIcon} from "@/shared/ui/icons.jsx";

const ProfileEditForm = () => {
    const {
        register,
        control,
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
        reValidateMode: 'onChange',
    });

    const avatarPreview = watch('avatar');
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessages, setToastMessages] = useState([]);

    const errorMessages = useMemo(() => {
        return Object.values(errors)
            .map((error) => error?.message)
            .filter(Boolean);
    }, [errors]);

    useEffect(() => {
        if (errorMessages.length > 0) {
            setToastMessages(errorMessages);
            setToastVisible(true);
            return;
        }

        setToastVisible(false);
        const timer = setTimeout(() => setToastMessages([]), 300);
        return () => clearTimeout(timer);
    }, [errorMessages]);

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
                <div className={`${styles.field} ${errors.firstName ? styles.fieldError : ''}`}>
                    <label htmlFor="firstName">Ваше имя</label>
                    <input
                        id="firstName"
                        {...register('firstName')}
                        placeholder="Валерия"
                        className={styles.input}
                        aria-invalid={Boolean(errors.firstName)}
                    />
                </div>

                <div className={`${styles.field} ${errors.lastName ? styles.fieldError : ''}`}>
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                        id="lastName"
                        {...register('lastName')}
                        placeholder="Салаватуллина"
                        className={styles.input}
                        aria-invalid={Boolean(errors.lastName)}
                    />
                </div>

                <div className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
                    <label htmlFor="email">Электронная почта</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="salavat@info.ru"
                        className={styles.input}
                        aria-invalid={Boolean(errors.email)}
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.field} ${errors.phone ? styles.fieldError : ''}`}>
                    <label htmlFor="phone">Номер телефона</label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <IMaskInput
                                id="phone"
                                mask="+{7} 000 000-00-00"
                                placeholder="+7 999 156-19-92"
                                inputMode="tel"
                                value={field.value}
                                onAccept={(value) => field.onChange(value)}
                                onBlur={field.onBlur}
                                className={styles.input}
                                aria-invalid={Boolean(errors.phone)}
                            />
                        )}
                    />
                </div>

                <div className={`${styles.field} ${errors.homePhone ? styles.fieldError : ''}`}>
                    <label htmlFor="homePhone">Домашний телефон</label>
                    <Controller
                        name="homePhone"
                        control={control}
                        render={({ field }) => (
                            <IMaskInput
                                id="homePhone"
                                mask="8 000 000-00-00"
                                placeholder="8 843 561-42-43"
                                inputMode="tel"
                                value={field.value || ''}
                                onAccept={(value) => field.onChange(value)}
                                onBlur={field.onBlur}
                                className={styles.input}
                                aria-invalid={Boolean(errors.homePhone)}
                            />
                        )}
                    />
                </div>

                <div
                    className={`${styles.field} ${styles.field__avatar} ${
                        errors.avatar ? styles.fieldError : ''
                    }`}
                >
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
                            <div className={styles.placeholder}><ProfileIcon/></div>
                        )}


                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.field} ${errors.personalAccount ? styles.fieldError : ''}`}>
                    <label htmlFor="personalAccount">Лицевой счет</label>
                    <input
                        id="personalAccount"
                        {...register('personalAccount')}
                        placeholder="13455794"
                        className={styles.input}
                        aria-invalid={Boolean(errors.personalAccount)}
                    />
                </div>

                <div className={`${styles.field} ${errors.password ? styles.fieldError : ''}`}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password')}
                        placeholder="Новый пароль (если меняете)"
                        className={styles.input}
                        aria-invalid={Boolean(errors.password)}
                    />
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
            <Toast
                title="Ошибки в форме"
                messages={toastMessages}
                visible={toastVisible}
            />
        </form>
    );
};

export default ProfileEditForm;
