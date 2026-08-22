import type { Experience, Project, ProjectKind, ProjectRole } from "./types";

export const site = {
    name: "Najmiddin Nazirov",
    role: "Full-stack dasturchi",
    tagline: `4 yildan ortiq tajribaga ega Full-stack dasturchiman. 2019-yil dasturlashni o‘rganib boshlaganman, 2022-yilda ishga kirganman. Asosan Next.js, React va Node.js bo‘yicha ishlayman va professional ish tajribam davomida JavaScript/TypeScript asosida bir qancha frameworklar bo‘yicha ishlaganman`,
    email: "nnazirovdev@gmail.com",
    languages: ["O‘zbekcha", "Русский", "English"],
    links: {
        github: "https://github.com/jarkurghan",
        linkedin: "https://www.linkedin.com/in/najmiddin-nazirov-236327325",
        telegram: "https://t.me/najmiddin_nazirov",
        leetcode: "https://leetcode.com/u/jarkurghan",
        email: "mailto:nnazirovdev@gmail.com",
        npm: "https://www.npmjs.com/~jarkurghan",
        cv: "/cv.pdf",
    },
};

export const contact = {
    status: {
        label: "Holat",
        value: "Yozish mumkin",
        detail: "Javob odatda 1–2 kun. Shoshilinch bo‘lsa — Telegram.",
    },
    facts: [
        { label: "Joylashuv 📍", value: "Toshkent" },
        { label: "Tajriba ⏳", value: "4+ yil" },
        { label: "Yosh 🦖", value: "28 yosh" },
        { label: "Soha 💻", value: "Full-stack" },
    ],
    channels: [
        {
            id: "telegram",
            label: "Telegram",
            handle: "@najmiddin_nazirov",
            href: site.links.telegram,
            hint: "Tezkor aloqaga chiqish uchun qulay",
            cta: "yozish →",
            primary: true,
            external: true,
        },
        {
            id: "email",
            label: "Email",
            handle: site.email,
            href: site.links.email,
            hint: "Asosan rasmiy xabarlar uchun.",
            cta: "yozish →",
            primary: true,
            external: false,
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            handle: "najmiddin-nazirov",
            href: site.links.linkedin,
            hint: "Ish tarixi bor. O‘zim kam kiraman.",
            cta: "ochish →",
            primary: false,
            external: true,
        },
        {
            id: "github",
            label: "GitHub",
            handle: "jarkurghan",
            href: site.links.github,
            hint: "Ochiq kodlar, shaxsiy dasturlarim, commitlar tarixi",
            cta: "ochish →",
            primary: false,
            external: true,
        },
        {
            id: "npm",
            label: "npm",
            handle: "~jarkurghan",
            href: site.links.npm,
            hint: "NPM paket: tashrif.",
            cta: "ochish →",
            primary: false,
            external: true,
        },
        {
            id: "leetcode",
            label: "LeetCode",
            handle: "jarkurghan",
            href: site.links.leetcode,
            hint: "Dasturlash mashqlari, reyting.",
            cta: "ochish →",
            primary: false,
            external: true,
        },
        {
            id: "cv",
            label: "CV",
            handle: "cv.pdf",
            href: site.links.cv,
            hint: "PDF rezyume.",
            cta: "yuklash →",
            primary: false,
            external: true,
        },
    ],
    writeAbout: {
        title: "Shu mavzularda yozing",
        items: [
            "Frontend, Backend yoki Full-stack ish taklifi",
            "Kodlarim va dasturlarim bo‘yicha",
            "Qisqa maslahat yoki hamkorlik",
            // "Bu qatorni o‘zingiz to‘ldiring 😉",
        ],
    },
};

export const about = `Dasturlashni 2019-yilda universitet davrida o‘rganib boshlaganman. Axborot xavfsizligi yo'nalishi bo'yicha o'qiganman. Web dasturlash yo'nalishida ishlab kelyapman.

Professional ish tajribam 2021-yildan boshlangan. Bugungi kunga kelib esa dasturlash hayotimning ajralmas qismiga aylanib qolgan.

Asosan Next.js, React va Node.js bo‘yicha ishlayman va ish tajribam davomida JavaScript/TypeScript asosida bir qancha frameworklar bo‘yicha ishlaganman.
`
// 2022-yilda ishga kirganman. Professional ish tajribam 2021-yildan boshlangan. Bugungi kunga kelib esa dasturlash hayotimning ajralmas qismiga aylanib qolgan.

// Dasturlashga universitetda kirib keldim. Axborot xavfsizligi yo‘nalishi C++, Python va web asoslarini berdi. Professional ish 2021-yilda, 4-kursda boshlandi.

// Transoxania Technology Solutions’da full-stack sifatida o‘nlab loyihalarda ishladim: API, admin panellar, ba’zi joylarda entity model va TeamLead.

// 2025-yil iyuldan Buyuk Britaniyadagi Carplus’da full-stack developer vakansiyasi bilan ishlayman. Amalda asosan frontend — kompaniyadagi asosiy frontend dasturchi.

// Bugungi kunga kelib esa dasturlash hayotimning ajralmas qismiga aylanib qolgan`;

export const experience: Experience[] = [
    {
        company: "Carplus",
        role: "Full-stack developer (asosan frontend)",
        period: "2025-yil iyul — hozirgi",
        place: "Buyuk Britaniya / Toshkent",
        url: "https://carplus.co.uk/",
        definition:
            "Carplus — Buyuk Britaniyada avtomobil moliyalashtirish (avtokredit/lizing) sohasida xizmat ko‘rsatuvchi yetakchi brokerlik kompaniyalaridan biri. U to‘g‘ridan-to‘g‘ri qarz beruvchi (lender) emas, balki xaridor va moliyaviy tashkilotlar (banklar/kreditorlar) o‘rtasida vositachilik qiladi.",
        points: [
            "Carplus — Buyuk Britaniyada avtomobil moliyalashtirish (avtokredit/lizing) sohasida xizmat ko‘rsatuvchi yetakchi brokerlik kompaniyalaridan biri. U to‘g‘ridan-to‘g‘ri qarz beruvchi (lender) emas, balki xaridor va moliyaviy tashkilotlar (banklar/kreditorlar) o‘rtasida vositachilik qiladi.",
            "Carplusga Full-stack vakansiya bo‘yicha kelgan bo‘lsa ham, asosan frontend bo‘yicha ishlaganman. Butun ishim davomida kompaniyaning asosiy frontend dasturchisi bo‘lganman.",
            "Kompaniya asosiy sayti - carplus.co.uk, shuningdek pcp.carplus.co.uk, coversimple.co.uk, carboom.co.uk va yana o‘nlab saytlar uchun frontendni to‘liq o‘zim qilganman.",
            "Bu yerda Next.js, Hono, Bun, deployment, telegram botlar, telegram mini applar va boshqa texnologiyalar bo‘yicha bilimlarim o‘sdi. Shuningdek 500+ sahifali sayt, A/B testing, SEO, vibe coding, marketing, katta ma’lumotlar bilan ishlash bo‘yicha yaxshi darajada rivojlandim.",
        ],
    },
    {
        company: "Transoxania Technology Solutions",
        role: "Full-stack developer",
        period: "2022-yil aprel — 2025-yil sentabr",
        place: "O‘zbekiston",
        url: "https://www.transoxania.uz",
        definition:
            "Transoxania Technology Solutions — 2021-yildan web-ilovalar ishlab chiqadigan dasturiy ta’minot kompaniyasi. U tayyor mahsulot sotuvchi marketplace emas, balki mehmonxona, kadrlar/buxgalteriya va boshqa biznes jarayonlari uchun maxsus web tizimlar quradi.",
        points: [
            "Web dasturlash bo‘yicha professional ishimning boshlanishi. Transoxaniaga ishga kirgan vaqtimda bilimlarim faqat nazariy, katta applar bilan tajribam yo‘q edi. Lekin 3 yillik ish davomida ancha ko‘p narsa o‘rgandim.",
            "Ba’zida Frontend, ba’zida Backend va ba’zida boshqa pozitsiyalarda ishladim. Node.js, React, Next.js, Express.js, TypeScript, JavaScript va boshqa dasturlash tillari/frameworklar asosida o‘nlab web loyihalarda ishladim.",
            "Web ilovalarni ishlab chiqishning barcha bosqichlari bo‘yicha ko‘nikmalarni orttirdim: autentifikatsiya/avtorizatsiya, social login, rollarni boshqarish, geolokatsiya bilan ishlash, fayllar bilan ishlash, to‘lov tizimlari (Click, Plum) bilan integratsiya, ma’lumotlar bazasining entity modelini loyihalash, government API va boshqa tashqi APIlar bilan ishlash, deployment, Jira/Bitbucket, npm paketlar yaratish va yana boshqa ko‘plab jarayon hamda texnologiyalar.",
            "Muammoga mustaqil va jamoaviy yechim qidirish, code review, algoritmlar ishlab chiqish bo‘yicha bilimlarim shakllandi. Buni GitHub va LeetCode orqali tekshirish mumkin.",
        ],
    },
    {
        company: "Digitalgov Innovation Hub",
        role: "Mentor",
        period: "2021-yil dekabr",
        place: "O‘zbekiston",
        url: "https://digitalgov.uz",
        definition:
            "Digitalgov Innovation Hub — xususiy IT-konsalting kompaniyasi. Asosan axborot texnologiyalari bo‘yicha xizmat va raqamli ko‘nikmalarni o‘rgatish bilan shug‘ullanadi.",
        points: [
            "Maktab o‘qituvchilariga C++ va dasturlash asoslaridan kurs o‘tdim.",
            "Bir oylik shartnoma asosida ishga kirdim. Afsuski, darslar faqat 1 oy uchun mo‘ljallangan edi.",
        ],
    },
    {
        company: "Universitet",
        role: "Bakalavr — axborot xavfsizligi",
        period: "2018 — 2022",
        place: "O‘zbekiston",
        kind: "education",
        points: [
            "2018-yilda O‘zbekiston Milliy Universitetida axborot xavfsizligi yo‘nalishida o‘qishga kirdim.",
            "Dasturlashga yaqin soha bo‘lgani uchun dasturlashni univerda boshlaganman. C++, Python va web dasturlash asoslari.",
            "2019-yildan kod yozishga jiddiyroq o‘tdim. Lekin 2021-yilga kelibgina professional ish boshlandi.",
            "4-kursda Digitalgov kompaniyasida ishladim, va 4-kursni o‘zida keyingi ishxonam Transoxaniada ish boshladim.",
        ],
    },
];

export const skills = {
    tillar: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frontend: ["React", "Next.js", "Redux", "Angular", "React Native", "Tailwind", "Ant Design", "shadcn/Radix"],
    backend: ["Node.js", "Bun", "Express", "Hono", "Drizzle", "Knex", "Redis", "PostgreSQL", "grammY", "Telegram Mini App", "WebSocket"],
    boshqa: ["Git", "GitHub", "Bitbucket", "npm", "pm2", "Dokploy", "Nginx"],
};

export const kindLabel: Record<ProjectKind, string> = {
    ish: "Ish",
    mahsulot: "Shaxsiy loyiha",
    bot: "Bot",
    oquv: "O‘rganish",
};

export const roleLabel: Record<ProjectRole, string> = {
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Full-stack",
    bot: "Bot",
};

export const featuredSlugs = ["tashrif", "carplus", "markdown", "monitoring", "sanoq", "githubchi"];

export const projects: Project[] = [
    {
        slug: "markdown",
        title: "markdown.uz",
        roles: ["frontend"],
        kind: "mahsulot",
        url: "https://markdown.uz",
        repo: "https://github.com/jarkurghan/markdown",
        summary: "Brauzerda ishlaydigan markdown muharriri",
        purpose:
            "README, qayd yoki blog qoralamasini akkountsiz yozasiz: chapda matn, o‘ngda darhol ko‘rinish. Matn qurilmada saqlanadi, serverga ketmaydi. `.md` import/eksport, formatlash paneli, o‘zbek/ingliz, kunduzgi va tungi rejim.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "marked", "lucide-react"],
        learned: [
            "Klaviatura bilan ishlash - tezkor klavishlar",
            "Kunduzgi/tungi rejimni almashtirish",
            "Inglizcha va o'zbekcha interfeys",
            "Search Engine Optimization",
            "Fayl bilan ishlash: import/eksport",
        ],
    },
    {
        slug: "carplus",
        title: "carplus.co.uk",
        roles: ["frontend"],
        kind: "ish",
        url: "https://carplus.co.uk/",
        summary: "Carplus kompaniyasining asosiy sayti",
        purpose:
            "Buyuk Britaniyadagi haydovchiga mashina moliyasini tushuntiradi, bepul quote to‘ldirishga yordam beradi, lender takliflarini ko‘rsatadi va diler stokidan mashina tanlash imkonini beradi. Carplus kredit beruvchi emas — FCA ruxsatli credit broker: anketani lender paneliga yuboradi. PCP, HP, bad credit va boshqa mahsulot sahifalari, katalog, kalkulyatorlar, FAQ va huquqiy ma’lumot shu saytda.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Redux", "Tailwind", "Ant Design", "Sass", "Recharts"],
        learned: [
            "Mukammal SEO coding",
            "700-800 sahifali saytni coding tomonlama to'g'ri qurish",
            "GTM va shu kabi analitika qatlamini sayt oqimiga bog‘lash",
            "Reusable code yozish, design/style va componentlardan qayta-qayta foydalanish",
            "Next.js versiyasini 11 dan 16 ga yangilash",
            "Performance optimizatsiya",
            "Yangi design uchun A/B testing",
        ],
    },
    {
        slug: "multik-bot",
        title: "multfilm kod",
        roles: ["bot", "frontend"],
        kind: "bot",
        url: "https://t.me/uz_multfilm_bot",
        summary: "Kod yuborganda mos multfilmni qaytaradigan bot",
        purpose:
            "Stock Keeping Unit (kod orqali kontent qidirish) uslubidagi bot. Multfilm kodini botga yuborasiz va bot sizga multfilmni tashlab beradi. Yoki mini app orqali multfilmlarni topish mumkin. Bu loyiha ichida bot va mini appdan tashqari kanal uchun post yig'ishda yordam beradigan bot ham bor.",
        stack: ["Bun", "grammY", "Hono", "Drizzle", "PostgreSQL", "Next.js 16", "React 19", "Tailwind", "Telegram Mini App", "tashrif"],
        learned: [
            'Telegram mini app',
            "Kanal uchun bot orqali uzoq davrli rejalashtirilgan postlar",
            "IMDb url (id) orqali multfilm ma'lumotlarini yig'ish",
            "Kod orqali kontent qidirish (SKU uslubi)",
            "Monorepo architecture",
        ],
    },
    {
        slug: "booking",
        title: "transoxania.travel",
        roles: ["fullstack"],
        kind: "ish",
        url: "https://transoxania.travel",
        summary: "Internet orqali mehmonxona band qilish",
        purpose:
            "HDP tizimiga ulangan ochiq sayt orqali mehmonxona band qilish. Tashqi mehmon ichki portalga kirmasdan xona qidiradi va band qiladi. Narx, mavjudlik, support va boshqalar.",
        stack: ["Node.js", "Express", "Knex", "React"],
        learned: [
            "B2B va B2C tizimlarni sinxronlashtirish",
            "Bo'sh xona mavjudligi va shu kabi murakkab logikalar",
            "To'lov tizimlari bilan integratsiya",
            "Bir qancha valyuta bilan ishlash",
        ],
    },
    {
        slug: "insta-saver",
        title: "insta saver",
        roles: ["bot"],
        kind: "bot",
        url: "https://t.me/insta_yuklagich_bot",
        summary: "Instagram havolasidan media yuklab beradigan bot",
        purpose: "Sahifani ochmasdan reels yoki postni Telegram chatga saqlaysiz. Shaxsiy chat va guruhda ishlaydi.",
        stack: ["Bun", "grammY", "Hono", "PostgreSQL", "Drizzle", "axios"],
        learned: [
            "Tashqi sayt o‘zgarishiga chidamli media yuklash",
            "Guruh va shaxsiy chat farqini boshqarish",
            "Fayl hajmi va rate cheklovlari",
            "Foydalanish hisobini keyin dashboardga ulash",
        ],
    },
    {
        slug: "lugat",
        title: "lug‘at",
        roles: ["fullstack"],
        kind: "mahsulot",
        url: "https://virtual-lugat.uz",
        summary: "O‘zbek tili izohli lug‘ati",
        purpose:
            "Foydalanuvchi o‘zbek so‘zlarining ma’nolarini qidiradi va izohni o‘qiydi. Admin so‘z va izohlarni kiritadi — ochiq qidiruv shu ma’lumotdan ishlaydi.",
        stack: ["React", "Redux", "Node.js", "Express", "Knex", "PostgreSQL"],
        learned: [
            "To‘liq stack: API, ma’lumot modeli va UI ni boshidan yozish",
            "Admin va oddiy foydalanuvchi oqimini ajratish",
            "Redux bilan holatni boshqarish",
            "O‘z g‘oyangizda mahsulot qarorlarini o‘zingiz qilish",
        ],
    },
    {
        slug: "hotel-portal",
        title: "hotel portal",
        roles: ["fullstack"],
        kind: "ish",
        url: "https://karvonsaroyi.uz",
        summary: "Mehmonxona ish kuni portali — mehmonlar bilan ishlashni elektronlashtirish",
        purpose:
            "Mehmonxona xodimlari mehmon, xona va kunlik ishlarni qog‘ozsiz yuritadi: asosiy ish paneli va admin. Bron va mehmon oqimi shu tizimda. Mobil ilova va ochiq sayt tugatilmagan.",
        stack: ["Node.js", "Express", "Knex", "PostgreSQL", "Nginx", "React", "React Native", "Material UI", "Formik", "Tailwind"],
        learned: [
            "Bitta API atrofida web admin, asosiy panel va mobil client qurish",
            "Mehmonxona domeni: xona, band, mehmon hayoti",
            "Tugatilmagan qismlarda scope ni kesish",
            "React Native bilan parallel client urinishi",
        ],
    },
    {
        slug: "tashrif",
        title: "tashrif.info",
        roles: ["fullstack"],
        kind: "mahsulot",
        url: "https://tashrif.info",
        repo: "https://www.npmjs.com/package/tashrif",
        summary: "Foydalanuvchilarning saytga kelgan tashriflarini yig‘adigan web analitika",
        purpose:
            "Sayt egasi haqiqiy sahifa ko‘rishlarini, mamlakat, yo‘l va referrerni panelda ko‘radi; yangi tashriflar jonli tushadi. Next.js saytga bitta komponent qo‘yiladi — og‘ir reklama-tracker o‘rniga ochiq clientId va domen tekshiruvi. Jamoa owner/admin/viewer rollari bilan ishlaydi; hisobotlar ixtiyoriy Telegramga (matn yoki PDF).",
        stack: [
            "Next.js 16",
            "React 19",
            "next-intl",
            "NextAuth 5",
            "Tailwind",
            "Bun",
            "Hono",
            "Drizzle",
            "PostgreSQL",
            "WebSocket",
            "grammY",
            "Recharts",
            "Zod",
            "jose",
            "Playwright",
            "MaxMind",
            "lucide-react",
        ],
        learned: [
            "Google orqali login va API JWT sinxroni",
            "Role-based jamoa (owner / admin / viewer)",
            "WebSocket orqali real-time dashboard",
            "NPM paket (`<Tashrif />`) va peer dependency",
            "Cookie-lessga yaqin tracking: Origin himoyasi, GeoIP, retention",
            "Telegram bot orqali rejalashtirilgan PDF hisobot",
        ],
    },
    {
        slug: "sanoq",
        title: "sanoq.uz",
        roles: ["frontend"],
        kind: "mahsulot",
        url: "https://sanoq.uz",
        summary: "Sanoq sistemalari haqida sayt",
        purpose:
            "Talaba, dasturchi yoki o‘qituvchi sonni 2–36 asos oralig‘ida o‘tkazadi, qadamma-qadam yechimni ko‘radi va tanlangan sistemada hisob qiladi. Akkount ochish yo‘q — hammasi brauzerda. Maqolalar, 13 til, kunduzgi/tungi rejim va ulashish bor.",
        stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "mathjs", "KaTeX", "Bun", "lucide-react", "shadcn/Radix", "next-themes", "Sass"],
        learned: [
            "Ko‘plab tillar uchun SEO",
            "Turli sanoq sistemasida ishlash",
            "Matematik bilimlarimni coding orqali ko‘rsatish",
            "Matematik ifodalarni UIda ko‘rsatish (KaTeX)",
            "Kunduzgi/tungi rejim",
        ],
    },
    {
        slug: "githubchi",
        title: "githubchi.uz",
        roles: ["fullstack"],
        kind: "mahsulot",
        url: "https://githubchi.uz",
        summary: "GitHub contribution grafigiga naqsh chizish dasturi — GitHub nakrutka",
        purpose:
            'Appga login qilasiz, commit qachonga qilish kerakligini tanlaysiz, commit miqdori va zichligini tanlaysiz yoki xohlasangiz matn yozasiz, commit qilishni bosganingizda yashil nuqtalar githubingizda ko‘rinadi. Bu appni "dasturchi uchun soxta tarix yaratish" deb nomlash mumkin',
        stack: ["Next.js 16", "React 19", "NextAuth", "Tailwind", "TypeScript", "Bun", "Hono", "Drizzle", "PostgreSQL", "GitHub"],
        learned: [
            "Boshqa sana uchun commit qilish",
            "Boshqa odam - foydalanuvchi nomidan commit qilish",
            "Pull request va git commandlarini avtomatlashtirish",
            "Empty commit qilish va boshqa usullar orqali git conflictni oldini olish",
        ],
    },
    {
        slug: "monitoring",
        title: "bot statistika",
        roles: ["fullstack"],
        kind: "mahsulot",
        url: "https://botstat.nazirov.dev",
        summary: "Shaxsiy Telegram botlarim statistikasi uchun dashboard",
        purpose: "Foydalanuvchisi ko‘proq bo‘lgan botlarimdagi statistikani kuzatish uchun dashboard. Login yo‘q.",
        stack: ["Next.js 16", "React 19", "Tailwind", "Recharts", "Radix", "lucide-react", "Bun", "Hono", "Drizzle", "PostgreSQL"],
        learned: ["Statistik dashboard yaratish", "Grafiklar va turli chartlar bilan ishlash"],
    },
    {
        slug: "crm-ui",
        title: "carplus CRM",
        roles: ["frontend"],
        kind: "ish",
        summary: "Carplus kompaniyasining ichki CRM tizimi",
        purpose:
            "Sales va admin jamoasi saytdan kelgan leadlarni bitta panelda ko‘radi: ro‘yxat, filtr, qidiruv, profil, agent biriktirish va Excel export. Leadni Autoconvert (AC) ga yuborish yoki qayta yuborish, kunlik/oylik statistika — operator ish kuni shu yerda. Hali to‘liq tugallanmagan, lekin ishlatiladi.",
        stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "shadcn/Radix", "Redux", "NextAuth", "Recharts"],
        learned: ["Google orqali login qilish", "Role-based ichki panel", "API darajasidagi paginition", "Data-table: filtr, search, paginition", "Katta ma’lumotlar bilan ishlash"],
    },
    {
        slug: "ovushtabot",
        title: "qarz nazoratchisi",
        roles: ["bot"],
        kind: "bot",
        repo: "https://github.com/jarkurghan/ovushtabot",
        summary: "Qarzlarni qayd qilish, boshqarish va eslatish uchun bot",
        purpose:
            "Kim oldi-berdi, qaytarish, muddat va eslatmani Telegramda yozasiz. Kontaktga Telegram shart emas. Ikkala tomon botda bo‘lsa, qarz sinxron ko‘rinadi.",
        stack: ["Bun", "grammY", "Hono", "PostgreSQL", "Drizzle"],
        learned: [
            "Qarzlarni qayd qilish, boshqarish va eslatish uchun bot",
            "Moliyaviy domen: transaction, yo‘nalish, netting, ortiqcha qaytarish",
            "In-memory sessiya qadamlari",
            "Sodda tilda summa parse («500 ming», «1 mln»)",
            "Ikkala tomonli ulashish: conflict va ruxsat",
        ],
    },
    {
        slug: "hrp",
        title: "HRP (HR & Payroll)",
        roles: ["fullstack"],
        kind: "ish",
        url: "https://admin.ishkuni.uz/",
        summary: "Kadrlar va buxgalteriya uchun yordamchi tizim",
        purpose:
            "HR va buxgalteriya xodim, lavozim, ko‘nikma, ishga olish va maosh hisobini qog‘ozsiz yuritadi. Yuzlab kichik jarayonlar — jadvallar, formalar, rollar — kundalik ish shu panelda.",
        stack: [
            "Node.js",
            "Express",
            "Knex",
            "Redis",
            "PostgreSQL",
            "Nginx",
            "TypeScript",
            "React",
            "Redux",
            "Material UI",
            "Ant Design",
            "Formik",
            "Bootstrap",
            "Tailwind",
        ],
        learned: [
            "Katta tizimni modullarga bo‘lish",
            "Bir mahsulotda bir necha UI kutubxonasini (MUI, Ant, Bootstrap) yuritish",
            "Redis kesh va Postgres ustida API",
            "HR/payroll domenida ma’lumot modeli va TeamLead yo‘nalishi",
            "JavaScript dan TypeScript ga o‘tish",
        ],
    },
    {
        slug: "taxmin",
        title: "taxmin.uz",
        roles: ["fullstack", "bot"],
        kind: "mahsulot",
        url: "https://taxmin.uz",
        summary: "Futbol o‘yinining taxminiy hisobi turniri — Taxminlar ligasi",
        purpose:
            "O‘yin oldidan bitta hisob yozasiz, tugagach ball avtomatik hisoblanadi, boshqalar taxminiga izoh/emoji qo‘yasiz, reytingda raqobatlashasiz. Kirish Telegram orqali. O‘yin boshlanishidan 5 daqiqa oldin taxmin yopiladi.",
        stack: ["Next.js 15", "React 19", "Tailwind", "Bun", "Hono", "Drizzle", "PostgreSQL", "grammY", "Telegram Mini App"],
        learned: [
            "Bitta o‘yin domenini sayt, Mini App va botda bir API ga ulash",
            "Telegram Login va Mini App initData",
            "Sport ballini qayta hisoblash (skor tuzatilsa)",
            "Vaqt zonasi va «start dan N daqiqa oldin yopish» qoidalari",
            "Tashqi football-data.org bilan o‘yinlar sinxroni",
        ],
    },
];

export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
    return featuredSlugs.map((slug) => getProject(slug)).filter((p): p is Project => Boolean(p));
}

export function skillList() {
    return [...skills.tillar, ...skills.frontend, ...skills.backend, ...skills.boshqa];
}

export function projectsByKind(kind: ProjectKind) {
    return projects.filter((p) => p.kind === kind);
}

export function formatRoles(roles: ProjectRole[]) {
    return roles.map((role) => roleLabel[role]).join(" · ");
}

export function projectMatchesRole(project: Project, role: ProjectRole) {
    if (project.roles.includes(role)) return true;
    if ((role === "frontend" || role === "backend") && project.roles.includes("fullstack")) {
        return true;
    }
    return false;
}

export function projectsByRole(role: ProjectRole) {
    return projects.filter((p) => projectMatchesRole(p, role));
}
