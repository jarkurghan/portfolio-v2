import { experience } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import type { Experience } from "@/lib/types";

type JobCopy = {
  company?: string;
  role: string;
  period: string;
  place?: string;
  definition?: string;
  points: string[];
};

const jobs: Record<Locale, Record<string, JobCopy>> = {
  uz: {
    Carplus: {
      role: "Full-stack developer (asosan frontend)",
      period: "2025-yil iyul — hozirgi",
      place: "Buyuk Britaniya / Toshkent",
      definition:
        "Carplus — Buyuk Britaniyada avtomobil moliyalashtirish (avtokredit/lizing) sohasida xizmat ko‘rsatuvchi yetakchi brokerlik kompaniyalaridan biri. U to‘g‘ridan-to‘g‘ri qarz beruvchi (lender) emas, balki xaridor va moliyaviy tashkilotlar (banklar/kreditorlar) o‘rtasida vositachilik qiladi.",
      points: [
        "Carplus — Buyuk Britaniyada avtomobil moliyalashtirish (avtokredit/lizing) sohasida xizmat ko‘rsatuvchi yetakchi brokerlik kompaniyalaridan biri. U to‘g‘ridan-to‘g‘ri qarz beruvchi (lender) emas, balki xaridor va moliyaviy tashkilotlar (banklar/kreditorlar) o‘rtasida vositachilik qiladi.",
        "Carplusga Full-stack vakansiya bo‘yicha kelgan bo‘lsa ham, asosan frontend bo‘yicha ishlaganman. Butun ishim davomida kompaniyaning asosiy frontend dasturchisi bo‘lganman.",
        "Kompaniya asosiy sayti - carplus.co.uk, shuningdek pcp.carplus.co.uk, coversimple.co.uk, carboom.co.uk va yana o‘nlab saytlar uchun frontendni to‘liq o‘zim qilganman.",
        "Bu yerda Next.js, Hono, Bun, deployment, telegram botlar, telegram mini applar va boshqa texnologiyalar bo‘yicha darajam oshdi. Shuningdek 500+ sahifali sayt, A/B testing, SEO, AI agentlar bilan ishlash, marketing, katta ma’lumotlar bilan ishlash bo‘yicha yaxshi darajada rivojlandim.",
      ],
    },
    "Transoxania Technology Solutions": {
      role: "Full-stack developer",
      period: "2022-yil aprel — 2025-yil sentabr",
      place: "Toshkent",
      definition:
        "Transoxania Technology Solutions — 2021-yildan web-ilovalar ishlab chiqadigan dasturiy ta’minot kompaniyasi. U tayyor mahsulot sotuvchi marketplace emas, balki mehmonxona, kadrlar/buxgalteriya va boshqa biznes jarayonlari uchun maxsus web tizimlar quradi.",
      points: [
        "Web dasturlash bo‘yicha professional ishimning boshlanishi. Transoxaniaga ishga kirgan vaqtimda bilimlarim faqat nazariy, katta applar bilan tajribam yo‘q edi. Lekin 3 yillik ish davomida ancha ko‘p narsa o‘rgandim.",
        "Ba’zida Frontend, ba’zida Backend va ba’zida boshqa pozitsiyalarda ishladim. Node.js, React, Next.js, Express.js, TypeScript, JavaScript va boshqa dasturlash tillari/frameworklar asosida o‘nlab web loyihalarda ishladim.",
        "Web ilovalarni ishlab chiqishning barcha bosqichlari bo‘yicha ko‘nikmalarni orttirdim: autentifikatsiya/avtorizatsiya, social login, rollarni boshqarish, geolokatsiya bilan ishlash, fayllar bilan ishlash, to‘lov tizimlari (Click, Plum) bilan integratsiya, ma’lumotlar bazasining entity modelini loyihalash, government API va boshqa tashqi APIlar bilan ishlash, deployment, Jira/Bitbucket, npm paketlar yaratish va yana boshqa ko‘plab jarayon hamda texnologiyalar.",
        "Muammoga mustaqil va jamoaviy yechim qidirish, code review, algoritmlar ishlab chiqish bo‘yicha bilimlarim shakllandi. Buni GitHub va LeetCode orqali tekshirish mumkin.",
      ],
    },
    "Digitalgov Innovation Hub": {
      role: "Mentor",
      period: "2021-yil dekabr",
      place: "Toshkent",
      definition:
        "Digitalgov Innovation Hub — xususiy IT-konsalting kompaniyasi. Asosan axborot texnologiyalari bo‘yicha xizmat va raqamli ko‘nikmalarni o‘rgatish bilan shug‘ullanadi.",
      points: [
        "Maktab o‘qituvchilariga C++ va dasturlash asoslaridan kurs o‘tdim.",
        "Bir oylik shartnoma asosida ishga kirdim. Afsuski, darslar faqat 1 oy uchun mo‘ljallangan edi.",
      ],
    },
    Universitet: {
      role: "Bakalavr — axborot xavfsizligi",
      period: "2018 — 2022",
      place: "Toshkent",
      points: [
        "2018-yilda O‘zbekiston Milliy Universitetida axborot xavfsizligi yo‘nalishida o‘qishga kirdim.",
        "Dasturlashga yaqin soha bo‘lgani uchun dasturlashni univerda boshlaganman. C++, Python va web dasturlash asoslari.",
        "2019-yildan kod yozishga jiddiyroq o‘tdim. Lekin 2021-yilga kelibgina professional ish boshlandi.",
        "4-kursda Digitalgov kompaniyasida ishladim, va 4-kursni o‘zida keyingi ishxonam Transoxaniada ish boshladim.",
      ],
    },
  },
  ru: {
    Carplus: {
      role: "Full-stack developer (в основном frontend)",
      period: "июль 2025 — настоящее время",
      place: "Великобритания / Ташкент",
      definition:
        "Carplus — одна из ведущих брокерских компаний Великобритании в сфере автофинансирования (автокредит / лизинг). Это не прямой кредитор (lender), а посредник между покупателем и финансовыми организациями (банки / кредиторы).",
      points: [
        "Carplus — одна из ведущих брокерских компаний Великобритании в сфере автофинансирования (автокредит / лизинг). Это не прямой кредитор (lender), а посредник между покупателем и финансовыми организациями (банки / кредиторы).",
        "В Carplus я пришёл по Full-stack вакансии, но по факту занимался в основном frontend. Всё это время я был основным frontend-разработчиком компании.",
        "Frontend основного сайта компании — carplus.co.uk, а также pcp.carplus.co.uk, coversimple.co.uk, carboom.co.uk и ещё десятков сайтов — я делал целиком сам.",
        "Здесь вырос уровень по Next.js, Hono, Bun, deployment, telegram-ботам, telegram mini app и другим технологиям. Параллельно хорошо прокачался на сайте на 500+ страниц, A/B testing, SEO, работе с AI-агентами, маркетинге и работе с большими объёмами данных.",
      ],
    },
    "Transoxania Technology Solutions": {
      role: "Full-stack developer",
      period: "апрель 2022 — сентябрь 2025",
      place: "Ташкент",
      definition:
        "Transoxania Technology Solutions — софтверная компания, с 2021 года разрабатывающая веб-приложения. Это не marketplace готовых продуктов, а кастомные веб-системы для отелей, кадров / бухгалтерии и других бизнес-процессов.",
      points: [
        "Отсюда началась профессиональная работа в веб-разработке. Когда я пришёл в Transoxania, знания были только теоретические — опыта с крупными приложениями не было. Но за три года работы я выучил гораздо больше.",
        "Где-то Frontend, где-то Backend, где-то другие роли. На Node.js, React, Next.js, Express.js, TypeScript, JavaScript и других языках / фреймворках я работал на десятках веб-проектов.",
        "Набрал навыки по всем этапам разработки веб-приложений: аутентификация / авторизация, social login, управление ролями, геолокация, работа с файлами, интеграция платёжных систем (Click, Plum), проектирование entity-модели базы, government API и другие внешние API, deployment, Jira / Bitbucket, создание npm-пакетов — и ещё множество процессов и технологий.",
        "Сложились навыки искать решение и самостоятельно, и в команде, делать code review, разрабатывать алгоритмы. Это можно проверить на GitHub и LeetCode.",
      ],
    },
    "Digitalgov Innovation Hub": {
      role: "Mentor",
      period: "декабрь 2021",
      place: "Ташкент",
      definition:
        "Digitalgov Innovation Hub — частная IT-консалтинговая компания. В основном занимается услугами в сфере информационных технологий и обучением цифровым навыкам.",
      points: [
        "Вёл курс по C++ и основам программирования для школьных учителей.",
        "Приняли по месячному контракту. К сожалению, занятия были рассчитаны только на один месяц.",
      ],
    },
    Universitet: {
      company: "Университет",
      role: "Бакалавр — информационная безопасность",
      period: "2018 — 2022",
      place: "Ташкент",
      points: [
        "В 2018 году поступил в Национальный университет Узбекистана на направление информационной безопасности.",
        "Сфера была близка к программированию, поэтому код я начал писать ещё в универе. C++, Python и основы веба.",
        "С 2019-го к коду подошёл серьёзнее. Но профессиональная работа началась только к 2021-му.",
        "На 4-м курсе работал в Digitalgov — и в том же 4-м курсе начал на следующем месте, в Transoxania.",
      ],
    },
  },
  en: {
    Carplus: {
      role: "Full-stack developer (mainly frontend)",
      period: "July 2025 — present",
      place: "United Kingdom / Tashkent",
      definition:
        "Carplus is one of the UK’s leading brokerage firms in car finance (auto credit / leasing). It is not a direct lender — it sits between the buyer and financial institutions (banks / creditors).",
      points: [
        "Carplus is one of the UK’s leading brokerage firms in car finance (auto credit / leasing). It is not a direct lender — it sits between the buyer and financial institutions (banks / creditors).",
        "I joined Carplus on a Full-stack vacancy, but in practice I worked mainly on frontend. For the whole time I was the company’s primary frontend developer.",
        "I built the frontend myself for the company’s main site — carplus.co.uk — as well as pcp.carplus.co.uk, coversimple.co.uk, carboom.co.uk, and a dozens more.",
        "Here my level rose in Next.js, Hono, Bun, deployment, Telegram bots, Telegram Mini Apps, and other tech. I also levelled up on a 500+ page site, A/B testing, SEO, working with AI agents, marketing, and working with large datasets.",
      ],
    },
    "Transoxania Technology Solutions": {
      role: "Full-stack developer",
      period: "April 2022 — September 2025",
      place: "Tashkent",
      definition:
        "Transoxania Technology Solutions is a software company that has been building web apps since 2021. It is not a marketplace of ready-made products — it builds custom web systems for hotels, HR / accounting, and other business processes.",
      points: [
        "This is where professional web work began. When I joined Transoxania my knowledge was only theoretical — I had no experience with large apps. Over three years I learned a great deal.",
        "Sometimes Frontend, sometimes Backend, sometimes other roles. I worked on dozens of web projects in Node.js, React, Next.js, Express.js, TypeScript, JavaScript, and other languages / frameworks.",
        "I picked up skills across every stage of building web apps: authentication / authorization, social login, role management, geolocation, file handling, payment integrations (Click, Plum), designing the database entity model, government APIs and other external APIs, deployment, Jira / Bitbucket, publishing npm packages — and many more processes and technologies.",
        "I learned to hunt for solutions both alone and in a team, to do code review, to design algorithms. You can check that on GitHub and LeetCode.",
      ],
    },
    "Digitalgov Innovation Hub": {
      role: "Mentor",
      period: "December 2021",
      place: "Tashkent",
      definition:
        "Digitalgov Innovation Hub is a private IT consulting company. It mainly provides information-technology services and teaches digital skills.",
      points: [
        "I taught school teachers a course in C++ and the basics of programming.",
        "I was hired on a one-month contract. Unfortunately, the lessons were only planned for a single month.",
      ],
    },
    Universitet: {
      company: "University",
      role: "Bachelor’s — information security",
      period: "2018 — 2022",
      place: "Tashkent",
      points: [
        "In 2018 I enrolled at the National University of Uzbekistan in information security.",
        "The field sat close to programming, so that is where I started to code — at uni. C++, Python, and the basics of the web.",
        "From 2019 I took writing code more seriously. Professional work only began around 2021.",
        "In my fourth year I worked at Digitalgov — and still in that fourth year I started at my next workplace, Transoxania.",
      ],
    },
  },
};

const pageCopy: Record<Locale, { title: string; metaDescription: string; eyebrow: string }> = {
  uz: {
    title: "Tajriba",
    metaDescription: "Ish va o‘qish yo‘li — universitetdan hozirgi kungacha.",
    eyebrow: "Timeline",
  },
  ru: {
    title: "Опыт",
    metaDescription: "Путь работы и учёбы — от университета до сегодня.",
    eyebrow: "Timeline",
  },
  en: {
    title: "Experience",
    metaDescription: "Work and study — from university to now.",
    eyebrow: "Timeline",
  },
};

export function getExperiencePage(locale: Locale) {
  const t = pageCopy[locale];
  const localized = jobs[locale];

  const items: Experience[] = experience.map((job) => ({
    ...job,
    ...localized[job.company],
  }));

  return {
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    items,
  };
}
