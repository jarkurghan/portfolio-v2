import type { Locale } from "@/lib/locale";

type ProjectCopy = {
  purpose: string;
  learned: string[];
};

export const projectDetails: Record<Locale, Record<string, ProjectCopy>> = {
  uz: {},
  ru: {
    markdown: {
      purpose:
        "Черновик README, заметки или блога без аккаунта: слева текст, справа сразу превью. Текст хранится на устройстве, на сервер не уходит. Импорт/экспорт `.md`, панель форматирования, узбекский/английский, дневной и ночной режим.",
      learned: [
        "Работа с клавиатурой — горячие клавиши",
        "Переключение дневного/ночного режима",
        "Интерфейс на английском и узбекском",
        "Search Engine Optimization",
        "Работа с файлами: импорт/экспорт",
      ],
    },
    carplus: {
      purpose:
        "Объясняет водителю в Великобритании автофинансирование, помогает заполнить бесплатный quote, показывает предложения lender’ов и даёт выбрать машину со склада дилера. Carplus не кредитор — FCA-авторизованный credit broker: анкету отправляет на панель lender’ов. PCP, HP, bad credit и другие продуктовые страницы, каталог, калькуляторы, FAQ и юридическая информация — на этом сайте.",
      learned: [
        "Качественный SEO coding",
        "Правильная кодовая архитектура сайта на 700–800 страниц",
        "Связка GTM и аналогичного analytics-слоя с потоком сайта",
        "Reusable code, повторное использование design/style и компонентов",
        "Обновление Next.js с 11-й версии на 16-ю",
        "Performance-оптимизация",
        "A/B testing нового дизайна",
      ],
    },
    "multik-bot": {
      purpose:
        "Бот в стиле Stock Keeping Unit (поиск контента по коду). Отправляете код мультфильма — бот присылает мультфильм. Или ищете мультфильмы через mini app. Внутри проекта, кроме бота и mini app, есть ещё бот, который помогает собирать посты для канала.",
      learned: [
        "Telegram Mini App",
        "Рассылка broadcast-рекламы через бота",
        "Долгосрочно запланированные посты в канал через бота",
        "Сбор данных мультфильма по IMDb url (id)",
        "Поиск контента по коду (SKU)",
        "Monorepo architecture",
      ],
    },
    booking: {
      purpose:
        "Бронирование гостиницы через открытый сайт, подключённый к системе hotel portal. Внешний гость ищет и бронирует комнату, не заходя во внутренний портал. Цена, наличие, support и остальное.",
      learned: [
        "Синхронизация B2B и B2C систем",
        "Наличие свободных номеров и похожая сложная логика",
        "Интеграция платёжных систем",
        "Работа с несколькими валютами",
      ],
    },
    "insta-saver": {
      purpose:
        "Ссылку на Reels или пост отправляете в Telegram-чат — бот скачивает видео или фото. Работает в личке и в группе.",
      learned: [
        "Прямое скачивание медиа из Instagram через request",
        "Скачивание медиа через внешний service (старая версия)",
        "Ограничения по размеру файла и rate limit",
      ],
    },
    lugat: {
      purpose:
        "Ищет значения узбекских слов и даёт прочитать толкование. Команда админов вносит слова и толкования — открытый поиск работает на этих данных.",
      learned: [
        "Первый проект, который я сделал целиком сам. Идея моя. Код написал полностью сам: API, модель данных и UI. SEO, role-based доступ, design, language и остальное.",
      ],
    },
    "hotel-portal": {
      purpose:
        "Онлайн-управление работой гостиницы. Работа с гостями, с сотрудниками, статус комнат, PDF-отчёты, master book (общий журнал всех основных операций гостиницы), booking/check-in/check-out и ещё ряд операций.",
      learned: [
        "master book",
        "PDF-отчёты",
        "Role-based внутренняя панель",
        "Работа с несколькими валютами",
        "Наличие свободных номеров и похожая сложная логика",
        "Синхронизация B2B и B2C систем",
      ],
    },
    tashrif: {
      purpose:
        "Дашборд для владельцев сайтов: логи заходов и статистика. Подключить сайт крайне просто. Один человек может вести несколько сайтов, несколько admin — один сайт, плюс смотреть рейтинг как observer. Логи и статистика обновляются real-time.",
      learned: [
        "Сборка NPM-пакета",
        "Статистический дашборд",
        "Real-time dashboard по WebSocket",
        "Отчёты через Telegram-бота",
        "PDF-отчёты",
        "Работа с AI-агентами",
      ],
    },
    sanoq: {
      purpose:
        "Студент, разработчик или преподаватель переводит число в системе счисления с основанием 2–36, видит пошаговое решение и считает в выбранной системе. Аккаунта нет — всё в браузере. Статьи, 13 языков, дневной/ночной режим и шаринг.",
      learned: [
        "SEO для многих языков",
        "Работа в разных системах счисления",
        "Показать математику через код",
        "Отображение математических выражений в UI (KaTeX)",
        "Дневной/ночной режим",
      ],
    },
    githubchi: {
      purpose:
        "Логинитесь в приложение, выбираете, на какую дату нужны commit’ы, задаёте количество и плотность — или пишете текст; после «commit» на GitHub появляются зелёные точки. Это приложение можно назвать «создание фейковой истории для разработчика».",
      learned: [
        "Commit на другую дату",
        "Commit от имени другого пользователя",
        "Автоматизация pull request и git-команд",
        "Empty commit и другие способы избежать git conflict",
      ],
    },
    monitoring: {
      purpose:
        "Дашборд статистики по моим ботам с большей аудиторией. Логина нет.",
      learned: [
        "Статистический dashboard",
        "Графики и разные chart’ы",
      ],
    },
    "crm-ui": {
      purpose:
        "Sales и admin видят лиды с сайта в одной панели: список, фильтр, поиск, профиль, назначение агента и Excel export. Отправка или повторная отправка лида в Autoconvert (AC), дневная/месячная статистика — рабочий день оператора здесь. Ещё не до конца готово, но уже используется.",
      learned: [
        "Логин через Google",
        "Role-based внутренняя панель",
        "Пагинация на уровне API",
        "Работа с большими объёмами данных",
      ],
    },
    ovushtabot: {
      purpose:
        "У кого взяли в долг, кому дали, сколько осталось — всё в одном месте. Не нужно вести тетрадку. Расчёты, напоминания, история, двусторонние долги, invitation (referral) система и остальное.",
      learned: [
        "Управление долгом с обеих сторон",
        "Простой интерфейс",
      ],
    },
    hrp: {
      purpose:
        "HR и бухгалтерия ведут сотрудника, должность, навыки, найм и расчёт зарплаты без бумаги. Сотни мелких процессов — таблицы, формы, роли — повседневная работа в этой панели.",
      learned: [
        "Деление большой системы на модули — Microservices architecture",
        "Единая login-страница для нескольких приложений",
        "Интеграция с внешними программами: Background check",
        "Несколько UI-библиотек в одном продукте (MUI, Ant, Bootstrap)",
        "Отдельные/общие команды и роли для филиалов и отделов",
        "Гибкая система расчёта зарплаты",
        "Отслеживание изменения эффективности сотрудников с большим стажем",
        "Наблюдение за задачами и процессами — Task management",
        "Интеграция с внешними страховыми провайдерами",
      ],
    },
    taxmin: {
      purpose:
        "Приложение для турнира прогнозов футбольных матчей. Ставок нет. За точность прогнозов начисляются баллы и строится рейтинг. Это только 1-я версия — сделана исключительно для прогнозов матчей чемпионата мира 2026.",
      learned: [
        "Одно приложение как web UI и как Telegram Mini App",
        "Футбольные матчи из внешнего API: football-data.org",
        "Рассылка broadcast-рекламы через бота",
      ],
    },
  },
  en: {
    markdown: {
      purpose:
        "Write a README, note, or blog draft with no account: text on the left, live preview on the right. The text stays on the device — it never goes to a server. `.md` import/export, formatting toolbar, Uzbek/English, light and dark mode.",
      learned: [
        "Keyboard handling — hotkeys",
        "Switching light/dark mode",
        "English and Uzbek UI",
        "Search Engine Optimization",
        "File handling: import/export",
      ],
    },
    carplus: {
      purpose:
        "Explains car finance to a UK driver, helps fill in a free quote, shows lender offers, and lets them pick a car from dealer stock. Carplus is not a lender — an FCA-authorised credit broker: it sends the application to a lender panel. PCP, HP, bad credit and other product pages, catalogue, calculators, FAQ, and legal information live on this site.",
      learned: [
        "Solid SEO coding",
        "Structuring a 700–800 page site correctly on the code side",
        "Wiring GTM and similar analytics layers into the site flow",
        "Writing reusable code; reusing design/style and components",
        "Upgrading Next.js from 11 to 16",
        "Performance optimization",
        "A/B testing a new design",
      ],
    },
    "multik-bot": {
      purpose:
        "A Stock Keeping Unit-style bot (content lookup by code). You send a cartoon code and the bot sends back the cartoon. Or you find cartoons via a mini app. Besides the bot and mini app, the project also includes a bot that helps assemble posts for a channel.",
      learned: [
        "Telegram Mini App",
        "Sending broadcast ads through a bot",
        "Long-horizon scheduled channel posts via a bot",
        "Collecting cartoon data from an IMDb url (id)",
        "Content lookup by code (SKU)",
        "Monorepo architecture",
      ],
    },
    booking: {
      purpose:
        "Hotel booking through a public site connected to the hotel portal system. An external guest searches and books a room without entering the internal portal. Price, availability, support, and the rest.",
      learned: [
        "Synchronizing B2B and B2C systems",
        "Vacant-room availability and similar complex logic",
        "Payment-system integrations",
        "Working with multiple currencies",
      ],
    },
    "insta-saver": {
      purpose:
        "You send a Reels or post link to a Telegram chat and the bot downloads the video or image. Works in private chat and in groups.",
      learned: [
        "Downloading media directly from Instagram via request",
        "Downloading media through an external service (old version)",
        "File-size and rate limits",
      ],
    },
    lugat: {
      purpose:
        "Looks up the meanings of Uzbek words and lets you read the definition. A team of admins enters words and definitions — public search runs on that data.",
      learned: [
        "The first project I did entirely myself. The idea is mine. I wrote all the code: API, data model, and UI. SEO, role-based access, design, language, and more.",
      ],
    },
    "hotel-portal": {
      purpose:
        "Online hotel operations. Work with guests, with staff, room status, PDF reports, master book (the general journal of all core hotel operations), booking/check-in/check-out, and more.",
      learned: [
        "master book",
        "PDF reports",
        "Role-based internal panel",
        "Working with multiple currencies",
        "Vacant-room availability and similar complex logic",
        "Synchronizing B2B and B2C systems",
      ],
    },
    tashrif: {
      purpose:
        "A dashboard for site owners to watch visitor logs and stats. Connecting a site is extremely easy. One person can manage several sites and several admins can manage one site, plus watch ranking as an observer. Logs and stats update in real time.",
      learned: [
        "Building an NPM package",
        "Statistics dashboard",
        "Real-time dashboard over WebSocket",
        "Reports via a Telegram bot",
        "PDF reports",
        "Working with AI agents",
      ],
    },
    sanoq: {
      purpose:
        "A student, developer, or teacher converts a number between bases 2–36, sees a step-by-step solution, and calculates in the chosen numeral system. No account — everything runs in the browser. Articles, 13 languages, light/dark mode, and sharing.",
      learned: [
        "SEO for many languages",
        "Working across numeral systems",
        "Showing mathematical knowledge through code",
        "Rendering math in the UI (KaTeX)",
        "Light/dark mode",
      ],
    },
    githubchi: {
      purpose:
        "You log into the app, pick when commits should be made, pick amount and density — or write text; when you hit commit, green dots appear on your GitHub. This app can be called “creating a fake history for a developer”.",
      learned: [
        "Committing for another date",
        "Committing on behalf of another user",
        "Automating pull requests and git commands",
        "Empty commits and other ways to avoid git conflicts",
      ],
    },
    monitoring: {
      purpose:
        "A dashboard to watch stats on my bots with a larger audience. No login.",
      learned: ["Building a statistics dashboard", "Working with graphs and different chart types"],
    },
    "crm-ui": {
      purpose:
        "Sales and admin see leads from the site in one panel: list, filter, search, profile, agent assignment, and Excel export. Send or resend a lead to Autoconvert (AC), daily/monthly stats — the operator’s workday lives here. Not fully finished yet, but it is in use.",
      learned: [
        "Login via Google",
        "Role-based internal panel",
        "API-level pagination",
        "Working with large datasets",
      ],
    },
    ovushtabot: {
      purpose:
        "Who you borrowed from, who you lent to, how much is left — all in one place. No notebook required. Accounting, reminders, history, two-sided debts, invitation (referral) system, and more.",
      learned: ["Managing a debt from both sides", "Simple interface"],
    },
    hrp: {
      purpose:
        "HR and accounting keep employees, positions, skills, hiring, and payroll without paper. Hundreds of small processes — tables, forms, roles — daily work lives in this panel.",
      learned: [
        "Splitting a large system into modules — Microservices architecture",
        "A single login page for several apps",
        "Integration with external software: Background check",
        "Running several UI libraries in one product (MUI, Ant, Bootstrap)",
        "Separate/shared teams and roles for branches and departments",
        "Flexible payroll calculation",
        "Tracking how long-tenured employees’ performance changes",
        "Tracking tasks and processes — Task management",
        "Integration with external insurance providers",
      ],
    },
    taxmin: {
      purpose:
        "An app for a football-match prediction tournament. No betting. Users get points by prediction accuracy and a ranking is set. This is version 1 only — built solely to predict 2026 World Cup matches.",
      learned: [
        "One app used as both web UI and Telegram Mini App",
        "Football matches from an external API: football-data.org",
        "Sending broadcast ads through a bot",
      ],
    },
  },
};
