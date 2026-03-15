# Community Management

Панель управления для сервиса community management: мониторинг, заявки, документы, профиль и другие разделы.

## Стек
- `Vite` + `React` (JS)
- `@tanstack/react-router` для роутинга
- `@tanstack/react-query` для серверного состояния
- `zustand` для локального состояния
- `react-hook-form` + `yup` для форм и валидации
- `react-helmet-async` для SEO-мета
- `react-imask` для масок ввода

## Архитектура
Проект организован по FSD (Feature-Sliced Design):
- `src/app` — инициализация приложения, роутинг, провайдеры, лейауты
- `src/pages` — страницы (UI + model + index)
- `src/features` — прикладные сценарии (например, формы)
- `src/entities` — доменные сущности
- `src/widgets` — крупные виджеты интерфейса
- `src/shared` — общие компоненты, стили, утилиты

## Стили
- Базовый шрифт: `Tilda Sans`
- Глобальные переменные и веса шрифта: `src/shared/style/variables.css`
- Подключение шрифтов: `src/shared/style/fonts.css`
- Базовые стили: `src/shared/style/style.css`

## Скрипты
```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Роутинг
Маршруты и SEO-описания централизованы в:
- `src/app/router/routes.js`

## Запуск
```bash
npm install
npm run dev
```

## Примечания
- Проект использует JavaScript (без TypeScript).
- Если меняете маршруты, обновляйте `routes.js` и связанные компоненты.
