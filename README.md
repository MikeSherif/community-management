# Community Management

Веб-приложение для управления сервисами жилого комплекса: заявки, документы, услуги, контакты, история платежей и профиль.

## Что внутри
- Личный кабинет с маршрутизацией по разделам.
- Страницы списка и деталей для услуг и заявок.
- Формы на `react-hook-form` + `yup` с валидацией.
- SEO-мета через `react-helmet-async`.
- Карта контактов на Яндекс.Картах.
- Локальное состояние на `zustand`.

## Технологии
### Core
- `react` `19.2.0`
- `react-dom` `19.2.0`
- `vite` `7.3.1`

### Routing & Data
- `@tanstack/react-router` `1.0.0`
- `@tanstack/react-query` `5.90.21`
- `zustand` `5.0.11`

### Forms & Validation
- `react-hook-form` `7.71.2`
- `yup` `1.7.1`
- `@hookform/resolvers` `5.2.2`
- `react-imask` `7.6.1`

### UI & Integrations
- `react-helmet-async` `3.0.0`
- `react-responsive` `10.0.1`
- `@iminside/react-yandex-maps` `1.2.7`

## Архитектура
Проект организован по FSD-подходу:
- `src/app` — инициализация приложения, роутер, провайдеры, лейауты.
- `src/pages` — роутовые страницы (`ui`, `model`, `index.js`).
- `src/features` — прикладные сценарии (например, формы редактирования).
- `src/entities` — бизнес-сущности и их UI-компоненты.
- `src/widgets` — крупные блоки интерфейса.
- `src/shared` — общие UI-элементы, стили, иконки, утилиты.

Ключевые файлы роутинга:
- `src/app/router/routes.js` — единый словарь путей, title/seo.
- `src/app/router/router.jsx` — дерево TanStack Router + loaders.
- `src/app/providers/SeoProvider.jsx` — синхронизация title/meta по текущему route.

## Основные маршруты
- `/` — монитор
- `/login` — вход
- `/my-applications` — список заявок
- `/my-applications/:applicationId` — детали заявки
- `/documents` — документы
- `/services` — категории услуг
- `/services/:serviceId` — детали услуги
- `/payment-history` — история платежей
- `/contacts` — контакты + карта
- `/profile` — профиль
- `*` — 404

## Стили и шрифты
- Шрифт по умолчанию: `Tilda Sans`.
- Переменные: `src/shared/style/variables.css`.
- Подключение шрифтов: `src/shared/style/fonts.css`.
- Глобальные стили: `src/shared/style/style.css`.

## Установка и запуск
```bash
npm install
npm run dev
```

Сборка production:
```bash
npm run build
npm run preview
```

Линтинг:
```bash
npm run lint
```

## Переменные окружения
Файл `.env`:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Community Management
VITE_BASE_PATH=/community-management/
```

Важно:
- В `vite.config.js` уже задан `base: '/community-management/'`.
- Для статических ассетов в коде рекомендуется использовать `import.meta.env.BASE_URL` (особенно для вложенных роутов).

## Примечания по разработке
- Проект на JavaScript (без TypeScript).
- Для новых роутов в `pages` используйте структуру `ui` + `model` + `index.js`.
- Рекомендуемый сценарий для детальных страниц: отдельная папка в `src/pages` + nested route в `src/app/router/router.jsx`.
