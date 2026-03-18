import {LandscapeIcon, EngineeringServiceIcon, CleaningIcon, LogisticsIcon, SafetyIcon} from "@/shared/ui/icons.jsx";

const withBaseUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const SERVICE_IMAGE = withBaseUrl("assets/img/news.png");

export const services = [
    {
        id: 1,
        title: "Участок и ландшафт",
        icon: <LandscapeIcon/>,
    },
    {
        id: 2,
        title: "Клининг дома",
        icon: <CleaningIcon/>,
    },
    {
        id: 3,
        title: "Инженерный сервис и бытовые услуги",
        icon: <EngineeringServiceIcon/>,
    },
    {
        id: 4,
        title: "Логистика и переезды",
        icon: <LogisticsIcon/>,
    },
    {
        id: 5,
        title: "Безопасность и IT",
        icon: <SafetyIcon/>,
    },
];

const defaultOptions = [
    {
        id: "opt-1",
        title: "Стрижка газона",
        price: 200,
        details: "Подробнее",
        image: SERVICE_IMAGE,
    },
    {
        id: "opt-2",
        title: "Зимняя очистка дорожек от снега и наледи",
        price: 200,
        details: "Подробнее",
        image: SERVICE_IMAGE,
    },
    {
        id: "opt-3",
        title: "Уход за декоративными кустарниками",
        price: 250,
        details: "Подробнее",
        image: SERVICE_IMAGE,
    },
    {
        id: "opt-4",
        title: "Вывоз сезонного мусора",
        price: 300,
        details: "Подробнее",
        image: SERVICE_IMAGE,
    },
    {
        id: "opt-5",
        title: "Полив и подкормка растений",
        price: 180,
        details: "Подробнее",
        image: SERVICE_IMAGE,
    },
    {
        id: "opt-6",
        title: "Очистка территории после работ",
        price: 150,
        details: "Подробнее",
        image: SERVICE_IMAGE,
    },
];

const serviceDetailsById = {
    "1": {
        title: "Участок и ландшафт - выберите услуги:",
        options: defaultOptions,
    },
    "2": {
        title: "Клининг дома - выберите услуги:",
        options: [
            {
                id: "opt-1",
                title: "Генеральная уборка помещений",
                price: 200,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-2",
                title: "Мытье окон и витражей",
                price: 200,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-3",
                title: "Химчистка мягкой мебели",
                price: 250,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-4",
                title: "Глажка белья",
                price: 180,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-5",
                title: "Дезинфекция санузлов",
                price: 220,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-6",
                title: "Уборка после ремонта",
                price: 300,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
        ],
    },
    "3": {
        title: "Инженерный сервис - выберите услуги:",
        options: [
            {
                id: "opt-1",
                title: "Проверка электрики",
                price: 350,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-2",
                title: "Обслуживание сантехники",
                price: 300,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-3",
                title: "Настройка умного дома",
                price: 450,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-4",
                title: "Профилактика отопления",
                price: 380,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-5",
                title: "Мелкий бытовой ремонт",
                price: 250,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-6",
                title: "Диагностика оборудования",
                price: 400,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
        ],
    },
    "4": {
        title: "Логистика и переезды - выберите услуги:",
        options: [
            {
                id: "opt-1",
                title: "Погрузка и разгрузка",
                price: 300,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-2",
                title: "Упаковка вещей",
                price: 220,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-3",
                title: "Транспортировка мебели",
                price: 450,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-4",
                title: "Сборка мебели",
                price: 280,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-5",
                title: "Вывоз упаковки",
                price: 150,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-6",
                title: "Срочный выезд бригады",
                price: 500,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
        ],
    },
    "5": {
        title: "Безопасность и IT - выберите услуги:",
        options: [
            {
                id: "opt-1",
                title: "Проверка камер наблюдения",
                price: 300,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-2",
                title: "Настройка домофона",
                price: 220,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-3",
                title: "Подключение интернета",
                price: 260,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-4",
                title: "Диагностика сетевого оборудования",
                price: 350,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-5",
                title: "Обновление ПО устройств",
                price: 290,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
            {
                id: "opt-6",
                title: "Консультация по цифровой безопасности",
                price: 180,
                details: "Подробнее",
                image: SERVICE_IMAGE,
            },
        ],
    },
};

export const getServiceDetailsById = (serviceId) => {
    const id = String(serviceId ?? "");
    if (serviceDetailsById[id]) {
        return serviceDetailsById[id];
    }

    const category = services.find((service) => String(service.id) === id);
    return {
        title: `${category?.title ?? "Сервис"} - выберите услуги:`,
        options: defaultOptions,
    };
};
