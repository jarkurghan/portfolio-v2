import { getProject, kindLabel, projects, roleLabel } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import type { Project, ProjectKind, ProjectRole } from "@/lib/types";
import { projectDetails } from "@/lib/messages/work-details";

type WorkChrome = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  open: string;
  all: string;
  back: string;
  purpose: string;
  learned: string;
  stack: string;
  live: string;
  bot: string;
  github: string;
  npm: string;
  kindLabel: Record<ProjectKind, string>;
  roleLabel: Record<ProjectRole, string>;
};

const chrome: Record<Locale, WorkChrome> = {
  uz: {
    title: "Loyihalar",
    metaDescription: "Ish, mahsulotlar, botlar va o‘rganish loyihalari.",
    eyebrow: "Index",
    intro: "Vazifa, nima o‘rgatgani va stack — har bir sahifada.",
    open: "ochish →",
    all: "Barchasi",
    back: "← orqaga",
    purpose: "Vazifa",
    learned: "Texnik vazifalar",
    stack: "Stack",
    live: "live ↗",
    bot: "Botga o‘tish ↗",
    github: "GitHub ↗",
    npm: "npm ↗",
    kindLabel,
    roleLabel,
  },
  ru: {
    title: "Проекты",
    metaDescription: "Работа, продукты, боты и учебные проекты.",
    eyebrow: "Index",
    intro: "Задача, чему научило и стек — на каждой странице.",
    open: "открыть →",
    all: "Все",
    back: "← назад",
    purpose: "Задача",
    learned: "Технические задачи",
    stack: "Stack",
    live: "live ↗",
    bot: "Перейти в бота ↗",
    github: "GitHub ↗",
    npm: "npm ↗",
    kindLabel: {
      ish: "Работа",
      mahsulot: "Личный проект",
      bot: "Бот",
      oquv: "Обучение",
    },
    roleLabel: {
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-stack",
      bot: "Bot",
    },
  },
  en: {
    title: "Projects",
    metaDescription: "Client work, products, bots, and learning projects.",
    eyebrow: "Index",
    intro: "Purpose, what it taught, and stack — on each page.",
    open: "open →",
    all: "All",
    back: "← back",
    purpose: "Purpose",
    learned: "Technical tasks",
    stack: "Stack",
    live: "live ↗",
    bot: "Open bot ↗",
    github: "GitHub ↗",
    npm: "npm ↗",
    kindLabel: {
      ish: "Employment work",
      mahsulot: "Personal project",
      bot: "Bot",
      oquv: "Learning",
    },
    roleLabel: {
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-stack",
      bot: "Bot",
    },
  },
};

const summaries: Record<Locale, Record<string, string>> = {
  uz: Object.fromEntries(projects.map((p) => [p.slug, p.summary])),
  ru: {
    markdown: "Markdown-редактор, работающий в браузере",
    carplus: "Основной сайт компании Carplus",
    "multik-bot": "Бот, который по коду возвращает соответствующий мультфильм",
    booking: "Бронирование гостиницы через интернет",
    "insta-saver": "Бот, скачивающий медиа по ссылке Instagram",
    lugat: "Толковый словарь узбекского языка",
    "hotel-portal":
      "Портал рабочего дня гостиницы — электронизация работы с гостями",
    tashrif: "Веб-аналитика, собирающая визиты пользователей на сайт",
    sanoq: "Сайт о системах счисления",
    githubchi:
      "Программа для узора на графике GitHub contributions — накрутка GitHub",
    monitoring: "Дашборд статистики моих Telegram-ботов",
    "crm-ui": "Внутренняя CRM-система компании Carplus",
    ovushtabot: "Бот для учёта, управления и напоминаний по долгам",
    hrp: "Вспомогательная система для кадров и бухгалтерии",
    taxmin: "Турнир прогнозов счёта футбольных матчей — Лига прогнозов",
  },
  en: {
    markdown: "In-browser markdown editor",
    carplus: "The main website of Carplus",
    "multik-bot": "Bot that returns the matching cartoon when you send a code",
    booking: "Hotel booking over the internet",
    "insta-saver": "Bot that downloads media from an Instagram link",
    lugat: "Explanatory dictionary of the Uzbek language",
    "hotel-portal":
      "Hotel operations portal — digitizing work with guests",
    tashrif: "Web analytics that collects user visits to a site",
    sanoq: "A site about numeral systems",
    githubchi:
      "Tool for drawing patterns on the GitHub contribution graph — GitHub contribution farming",
    monitoring: "Dashboard for the stats of my Telegram bots",
    "crm-ui": "Internal CRM of Carplus",
    ovushtabot: "Bot for recording, managing, and reminding about debts",
    hrp: "Support system for HR and accounting",
    taxmin: "Football score-prediction tournament — Predictions League",
  },
};

export function getWorkPage(locale: Locale) {
  const t = chrome[locale];
  const bySlug = summaries[locale];

  const localized: Project[] = projects.map((project) => ({
    ...project,
    summary: bySlug[project.slug] ?? project.summary,
  }));

  const filters: Array<{ id: "all" | ProjectRole; label: string }> = [
    { id: "all", label: t.all },
    { id: "frontend", label: t.roleLabel.frontend },
    { id: "backend", label: t.roleLabel.backend },
    { id: "fullstack", label: t.roleLabel.fullstack },
    { id: "bot", label: t.roleLabel.bot },
  ];

  return {
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    intro: t.intro,
    open: t.open,
    kindLabel: t.kindLabel,
    roleLabel: t.roleLabel,
    filters,
    projects: localized,
  };
}

export function getWorkProject(locale: Locale, slug: string): Project | undefined {
  const project = getProject(slug);
  if (!project) return undefined;

  const summary = summaries[locale][slug] ?? project.summary;
  const details = locale === "uz" ? undefined : projectDetails[locale][slug];

  return {
    ...project,
    summary,
    purpose: details?.purpose ?? project.purpose,
    learned: details?.learned ?? project.learned,
  };
}

export function getWorkChrome(locale: Locale) {
  return chrome[locale];
}
