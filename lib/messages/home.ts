import { formatExperienceDuration } from "@/lib/experience-duration";
import type { Locale } from "@/lib/locale";

type HomeCopy = {
  role: string;
  metaDescription: string;
  projectsCta: string;
  aboutEyebrow: string;
  aboutTitle: string;
  about: string;
};

const copy: Record<Locale, HomeCopy> = {
  uz: {
    role: "Front end dasturchi",
    metaDescription:
      "Full-stack dasturchi, asosan frontend. Carplus (UK) va shaxsiy mahsulotlar.",
    projectsCta: "Loyihalar",
    aboutEyebrow: "Men haqimda",
    aboutTitle: "Qisqacha",
    about: `Dasturlashni 2019-yilda universitet davrida o‘rganib boshlaganman. Axborot xavfsizligi yo'nalishi bo'yicha o'qiganman. Web dasturlash yo'nalishida ishlab kelyapman.

Professional ish tajribam 2021-yildan boshlangan. Dasturlash asoslari boʻyicha 1 oylik oʻqituvchilikdan keyin, 2022-yil aprel oyida web dasturlash sohasida ish boshladim.

Asosan Next.js, React va Node.js bo‘yicha ishlayman va ish tajribam davomida JavaScript/TypeScript asosida bir qancha frameworklar bo‘yicha ishlaganman.
`,
  },
  ru: {
    role: "Фронтенд разработчик",
    metaDescription:
      "Full-stack разработчик, в основном frontend. Carplus (UK) и личные продукты.",
    projectsCta: "Проекты",
    aboutEyebrow: "Обо мне",
    aboutTitle: "Кратко",
    about: `Программирование начал изучать в 2019 году, ещё в университете. Учился по направлению информационной безопасности. Работаю в веб-разработке.

Профессиональный опыт начался с 2021 года. После месяца преподавания основ программирования в апреле 2022-го я начал работать в вебе.

В основном работаю с Next.js, React и Node.js; за время работы освоил несколько фреймворков на JavaScript/TypeScript.
`,
  },
  en: {
    role: "Front end developer",
    metaDescription:
      "Full-stack developer, mainly frontend. Carplus (UK) and personal products.",
    projectsCta: "Projects",
    aboutEyebrow: "About me",
    aboutTitle: "In brief",
    about: `I started learning to program in 2019, during university. I studied information security. I work in web development.

Professional work started in 2021. After a month of teaching programming basics, I began working in web development in April 2022.

I mainly work with Next.js, React, and Node.js, and over my career I have worked with several frameworks on JavaScript/TypeScript.
`,
  },
};

export function getHomePage(locale: Locale) {
  return {
    ...copy[locale],
    experience: formatExperienceDuration(locale),
  };
}
