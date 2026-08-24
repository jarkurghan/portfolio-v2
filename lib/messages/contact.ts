import { contact } from "@/lib/content";
import { cvHref, type Locale } from "@/lib/locale";

type ChannelId = (typeof contact.channels)[number]["id"];

type ContactCopy = {
  title: string;
  metaDescription: string;
  presenceTitle: string;
  facts: { label: string; value: string }[];
  channels: Record<ChannelId, { hint: string; cta: string }>;
  writeAbout: { title: string; items: string[] };
};

const copy: Record<Locale, ContactCopy> = {
  uz: {
    title: "Aloqa",
    metaDescription: "Email, Telegram va boshqa kanallar.",
    presenceTitle: "Men buyoqdaman",
    facts: [
      { label: "Joylashuv 📍", value: "Toshkent" },
      { label: "Tajriba ⏳", value: "4+ yil" },
      { label: "Yosh 🦖", value: "28 yosh" },
      { label: "Soha 💻", value: "Full-stack" },
    ],
    channels: {
      telegram: { hint: "Tezkor aloqaga chiqish uchun qulay", cta: "yozish →" },
      email: { hint: "Asosan rasmiy xabarlar uchun.", cta: "yozish →" },
      linkedin: { hint: "Ish tarixi bor. O‘zim kam kiraman.", cta: "ochish →" },
      github: {
        hint: "Ochiq kodlar, shaxsiy dasturlarim, commitlar tarixi",
        cta: "ochish →",
      },
      npm: { hint: "NPM paket: tashrif.", cta: "ochish →" },
      leetcode: { hint: "Dasturlash mashqlari, reyting.", cta: "ochish →" },
      cv: { hint: "PDF rezyume.", cta: "yuklash →" },
    },
    writeAbout: {
      title: "Shu mavzularda yozing",
      items: [
        "Frontend, Backend yoki Full-stack ish taklifi",
        "Kodlarim va dasturlarim bo‘yicha",
        "Qisqa maslahat yoki hamkorlik",
      ],
    },
  },
  ru: {
    title: "Контакты",
    metaDescription: "Email, Telegram и другие каналы.",
    presenceTitle: "Где меня найти",
    facts: [
      { label: "Локация 📍", value: "Ташкент" },
      { label: "Опыт ⏳", value: "4+ года" },
      { label: "Возраст 🦖", value: "28 лет" },
      { label: "Сфера 💻", value: "Full-stack" },
    ],
    channels: {
      telegram: { hint: "Удобно для быстрой связи", cta: "написать →" },
      email: { hint: "В основном для официальных сообщений.", cta: "написать →" },
      linkedin: { hint: "Есть история работы. Сам захожу редко.", cta: "открыть →" },
      github: {
        hint: "Открытый код, личные проекты, история коммитов",
        cta: "открыть →",
      },
      npm: { hint: "NPM-пакет: tashrif.", cta: "открыть →" },
      leetcode: { hint: "Задачи по программированию, рейтинг.", cta: "открыть →" },
      cv: { hint: "PDF-резюме.", cta: "скачать →" },
    },
    writeAbout: {
      title: "Пишите по этим темам",
      items: [
        "Предложение работы: Frontend, Backend или Full-stack",
        "По моему коду и программам",
        "Короткий совет или сотрудничество",
      ],
    },
  },
  en: {
    title: "Contact",
    metaDescription: "Email, Telegram, and other channels.",
    presenceTitle: "Where to find me",
    facts: [
      { label: "Location 📍", value: "Tashkent" },
      { label: "Experience ⏳", value: "4+ years" },
      { label: "Age 🦖", value: "28 y.o." },
      { label: "Field 💻", value: "Full-stack" },
    ],
    channels: {
      telegram: { hint: "Convenient for a quick message", cta: "write →" },
      email: { hint: "Mostly for formal messages.", cta: "write →" },
      linkedin: { hint: "Work history is there. I rarely log in.", cta: "open →" },
      github: {
        hint: "Open source, personal projects, commit history",
        cta: "open →",
      },
      npm: { hint: "NPM package: tashrif.", cta: "open →" },
      leetcode: { hint: "Coding practice, rating.", cta: "open →" },
      cv: { hint: "PDF resume.", cta: "download →" },
    },
    writeAbout: {
      title: "Write about",
      items: [
        "A Frontend, Backend, or Full-stack job offer",
        "My code and projects",
        "A short consult or collaboration",
      ],
    },
  },
};

export function getContactPage(locale: Locale) {
  const t = copy[locale];

  const cv = cvHref(locale);
  const channels = contact.channels.map((channel) =>
    channel.id === "cv"
      ? { ...channel, ...t.channels.cv, href: cv, handle: cv.slice(1) }
      : { ...channel, ...t.channels[channel.id] },
  );

  return {
    title: t.title,
    metaDescription: t.metaDescription,
    presenceTitle: t.presenceTitle,
    facts: t.facts,
    writeAbout: t.writeAbout,
    channels,
    write: channels.filter((c) => c.primary),
  };
}
