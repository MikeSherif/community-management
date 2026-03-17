import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Login.module.css';
import Toast from '@/widgets/toast';
import { LogoIcon, LogoText } from '@/shared/ui/icons.jsx';
import { loginSchema } from '@/pages/login/model';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            personalAccount: '',
            password: '',
        },
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

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
        console.log('Login submit', data);
    };

    return (
        <section className={styles.login}>
            <div className={styles.card}>
                <div className={styles.aside__header}>
                    <LogoIcon />
                    <LogoText />
                </div>

                <div className={styles.title}>Вход в личный кабинет</div>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={`${styles.field} ${errors.personalAccount ? styles.fieldError : ''}`}>
                        <label htmlFor="personalAccount">Лицевой счет</label>
                        <input
                            id="personalAccount"
                            className={styles.input}
                            placeholder="Например, 13455794"
                            {...register('personalAccount')}
                            aria-invalid={Boolean(errors.personalAccount)}
                        />
                    </div>

                    <div className={`${styles.field} ${errors.password ? styles.fieldError : ''}`}>
                        <label htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            placeholder="Введите пароль"
                            {...register('password')}
                            aria-invalid={Boolean(errors.password)}
                        />
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Входим...' : 'Войти'}
                        </button>
                        <div className={styles.helper}>Если забыли пароль — обратитесь в управляющую компанию</div>
                    </div>
                </form>
            </div>

            <Toast
                title="Ошибки в форме"
                messages={toastMessages}
                visible={toastVisible}
            />
        </section>
    );
};

export default Login;
