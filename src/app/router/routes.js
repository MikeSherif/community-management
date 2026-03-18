export const ROUTES = {
    dashboard: {
        path: "/",
        title: "Монитор",
        seo: {
            title: "Монитор — Community Management",
            description: "Мониторинг системы управления домом",
        },
    },

    login: {
        path: "/login",
        title: "Вход",
        seo: {
            title: "Вход — Community Management",
            description: "Авторизация пользователя",
        },
    },

    applications: {
        path: "/my-applications",
        title: "Мои заявки",
        seo: {
            title: "Мои заявки — Community Management",
            description: "Управление заявками",
        },
    },

    applicationsDetail: {
        path: "/my-applications/$applicationId",
        title: "Детали заявки",
        seo: {
            title: "Детали заявки — Community Management",
            description: "Просмотр конкретной заявки",
        },
    },

    account: {
        path: "/account",
        title: "Лицевой счет",
        seo: {
            title: "Лицевой счет — Community Management",
            description: "Информация о лицевом счете",
        },
    },

    documents: {
        path: "/documents",
        title: "Документы",
        seo: {
            title: "Документы — Community Management",
            description: "Документы и файлы",
        },
    },

    concierge: {
        path: "/concierge",
        title: "Консьерж сервис",
        seo: {
            title: "Консьерж сервис — Community Management",
            description: "Сервисные услуги",
        },
    },

    polls: {
        path: "/polls",
        title: "Опросы",
        seo: {
            title: "Опросы — Community Management",
            description: "Опросы и голосования",
        },
    },

    services: {
        path: "/services",
        title: "Услуги",
        seo: {
            title: "Услуги — Community Management",
            description: "Услуги",
        },
    },

    servicesDetail: {
        path: "/services/$serviceId",
        title: "Детали услуги",
        seo: {
            title: "Детали услуги — Community Management",
            description: "Подробная информация об услуге",
        },
    },

    profile: {
        path: "/profile",
        title: "Профиль",
        seo: {
            title: "Профиль — Community Management",
            description: "Профиль пользователя",
        },
    },

    contacts: {
        path: "/contacts",
        title: "Контакты",
        seo: {
            title: "Контакты — Community Management",
            description: "Контактная информация",
        },
    },

    paymentHistory: {
        path: "/payment-history",
        title: "История платежей",
        seo: {
            title: "История платежей — Community Management",
            description: "История оплат и платежей",
        },
    },

    notFound: {
        path: "*",
        title: "Страница не найдена",
        seo: {
            title: "404 — Страница не найдена",
            description: "Запрашиваемая страница не существует",
        },
    },
};
