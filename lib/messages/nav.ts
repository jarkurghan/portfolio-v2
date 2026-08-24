import type { Locale } from "@/lib/locale";

type NavCopy = {
  home: string;
  experience: string;
  work: string;
  contact: string;
  notFound: string;
  language: string;
  contactNav: string;
};

const copy: Record<Locale, NavCopy> = {
  uz: {
    home: "Asosiy",
    experience: "Tajriba",
    work: "Loyihalar",
    contact: "Aloqa",
    notFound: "Topilmadi",
    language: "Til",
    contactNav: "Aloqa",
  },
  ru: {
    home: "Главная",
    experience: "Опыт",
    work: "Проекты",
    contact: "Контакты",
    notFound: "Не найдено",
    language: "Язык",
    contactNav: "Контакты",
  },
  en: {
    home: "Home",
    experience: "Experience",
    work: "Projects",
    contact: "Contact",
    notFound: "Not found",
    language: "Language",
    contactNav: "Contact",
  },
};

export function getNav(locale: Locale) {
  return copy[locale];
}

export function getDockItems(locale: Locale) {
  const t = copy[locale];
  return [
    { href: "/", label: t.home },
    { href: "/experience", label: t.experience },
    { href: "/work", label: t.work },
    { href: "/contact", label: t.contact },
  ];
}
