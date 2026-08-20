import type { Experience, Project, ProjectKind } from "./types";

export const site = {
    name: "Najmiddin Nazirov",
    role: "Full-stack dasturchi",
    tagline: `4 yildan ortiq tajribaga ega Full-stack dasturchiman. 2019-yil dasturlashni o'rganib boshlaganman, 2022-tilda ishga kirishganman. Asosan Next.js, React va Node.js bo'yicha ishlayman va professional ish tajribam davomida javascript/typescript asosida bir qancha frameworklar bo'yicha ishlaganman`,
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

export const about = `Dasturlashga universitetda kirib keldim. Axborot xavfsizligi yo‘nalishi C++, Python va web asoslarini berdi. Professional ish 2021-yilda, 4-kursda boshlandi.

Transoxania Technology Solutions’da full-stack sifatida o‘nlab loyihalarda ishladim: API, admin panellar, ba’zi joylarda entity model va TeamLead.

2025-yil iyuldan Buyuk Britaniyadagi Carplus’da full-stack developer vakansiyasi bilan ishlayman. Amalda asosan frontend — kompaniyadagi asosiy frontend dasturchi.`;

export const experience: Experience[] = [
    {
        company: "Carplus",
        role: "Full-stack developer (asosan frontend)",
        period: "2025-yil iyul — hozirgi",
        place: "Buyuk Britaniya / Toshkent",
        url: "https://carplus.co.uk/",
        points: [
            "Buyuk Britaniyaning avtomobil moliyasi brokeri. Asosiy sayt, quote, mashina katalogi, kalkulyatorlar va ichki CRM frontend bilan ishlayman.",
            "Kompaniyadagi asosiy frontend dasturchiman. Next.js, Redux, SEO-og‘ir marketing sahifalar va lead oqimi — kundalik ishim shu.",
            "Kampaniya subdomainlari, Autoconvert ga ulangan CRM va yangi brend landinglarini ham yuritaman. Full-stack vakansiya, amalda asosan frontend.",
        ],
    },
    {
        company: "Transoxania Technology Solutions",
        role: "Full-stack dasturchi",
        period: "2022-yil aprel — 2025-yil sentabr",
        place: "O‘zbekiston",
        url: "https://www.transoxania.uz",
        points: [
            "O‘nlab web loyihalarda ishladim: Node.js, Express, Knex, PostgreSQL, Redis; UI tomonda React va Angular. API dan admin panelgacha yozganman.",
            "Ba’zi loyihalarda obyekt modelini tayyorladim, ba’zilarida TeamLead bo‘ldim — vazifa taqsimlash, kodni ko‘rib chiqish, jamoa bilan yetkazib berish.",
            "Mehmonxona, HR/payroll, lug‘at va booking kabi real biznes tizimlari. Xodimlar har kuni ishlatadigan dasturlar, na demo.",
        ],
    },
    {
        company: "Digitalgov Innovation Hub",
        role: "Mentor",
        period: "2021-yil noyabr — dekabr",
        place: "O‘zbekiston",
        url: "https://digitalgov.uz",
        points: [
            "Maktab o‘qituvchilariga C++ va dasturlash asoslaridan qisqa kurs o‘tdim. O‘zi kod yozmagan odamlarga bosqichma-bosqich tushuntirish.",
            "Universitetning 4-kursida, professional ishga kirish arafasida. Dasturlashni sodda tilda aytishni shu yerda mashq qildim.",
        ],
    },
    {
        company: "Universitet",
        role: "Bakalavr — axborot xavfsizligi",
        period: "2018 — 2022",
        place: "O‘zbekiston",
        kind: "education",
        points: [
            "Dasturlashga shu yerda kirib keldim. Yo‘nalish axborot xavfsizligi — C++, Python va web asoslari shu yerda boshlandi.",
            "2019-yildan kod yozishga jiddiyroq o‘tdim. 4-kursda, 2021-yilda professional ish boshlandi — avval o‘qish, keyin ish.",
            "Universitet bergan asos keyingi frontend va backend ishlariga poydevor bo‘ldi. Keyin Transoxania, so‘ng Carplus.",
        ],
    },
];

export const skills = {
    tillar: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "C++"],
    frontend: ["React", "Next.js", "Redux", "Angular", "React Native", "Tailwind", "Material UI", "Ant Design"],
    backend: ["Node.js", "Bun", "Express", "Hono", "PostgreSQL", "Drizzle", "Knex", "Redis", "Nginx"],
    boshqa: ["Git", "Bitbucket", "Agile", "grammY", "Telegram Mini App"],
};

export const kindLabel: Record<ProjectKind, string> = {
    ish: "Ish",
    mahsulot: "Mahsulot",
    bot: "Bot",
    oquv: "O‘rganish",
};

export const featuredSlugs = ["tashrif", "carplus", "markdown", "monitoring", "sanoq", "githubchi"];

export const projects: Project[] = [
    {
        slug: "carplus",
        title: "carplus.co.uk",
        year: "2025",
        kind: "ish",
        url: "https://carplus.co.uk/",
        summary: "Carplus kompaniyasining asosiy website'i",
        purpose:
            "Mijoz mashina moliyasini tushunishi, bepul quote to‘ldirishi, lender takliflarini ko‘rishi va diler stokidan mashina tanlashi kerak. Carplus kredit beruvchi emas — FCA ruxsatli credit broker.",
        tasks: [
            "Quote (ko‘p qadamli ariza) va lead yuborish oqimini frontendda tutib turish.",
            "Mashina katalogi, HP/PCP kalkulyatorlar, lender va mahsulot landinglari.",
            "SEO: canonical, sitemap, redirectlar, magazine/FAQ/locations.",
            "GTM, Hotjar va tashqi Carplus API / stock servislari bilan ishlash.",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript", "Redux Toolkit", "RTK Query", "Bootstrap", "Tailwind", "Ant Design", "Sass"],
        learned:
            "Katta marketing saytni App Router da ushlab turish, SEO-og‘ir marshrutlar, lead funnel va tashqi API ga bog‘liq frontend arxitekturasi. FCA mahsulotida aniq copy, disclosure va analytics qatlamlari muhimligini ko‘rdim. Asosiy frontend dasturchi sifatida dizayn tizimi, legacy quote va yangi sahifalarni birga yuritishni o‘rgandim.",
    },
    // {
    //     slug: "pcp-carplus",
    //     title: "pcp.carplus.co.uk",
    //     year: "2025",
    //     kind: "ish",
    //     url: "https://pcp.carplus.co.uk",
    //     summary: "PCP mahsuloti uchun alohida landing va quote — reklama kampaniyalaridan kelgan leadlarni api_key orqali ajratish.",
    //     purpose:
    //         "Asosiy saytdagi PCP sahifasini reklama (Google/Bing/Facebook) uchun alohida domenda berish. Leadlar CRM da `PCP` kaliti bilan filtrlanadi. Oila ichida vans, deals va boshqa landinglar ham shu shablon.",
    //     tasks: [
    //         "PCP tushuntirish, taqqoslash, FAQ va kalkulyatorli landing.",
    //         "URL qadamlari bilan quote formasi va UTM / click ID larni leadga yozish.",
    //         "GTM va Facebook Conversion API hodisalarini forma qadamlariga bog‘lash.",
    //     ],
    //     stack: ["Next.js 16", "React 19", "Redux Toolkit", "RTK Query", "Sass", "Tailwind", "axios"],
    //     learned:
    //         "Bitta mahsulotni kampaniya domeniga ajratish, lead attribution (`api_key`, UTM, gclid) va parallel form-v2 tajribalari. Shablon oilasini (ko‘p o‘xshash Next.js landinglar) qanday ushlab turishni tushundim — farq brend, copy va kalitda, yadro oqim bir xil.",
    // },
    {
        slug: "crm-ui",
        title: "Carplus CRM",
        year: "2025",
        kind: "ish",
        summary: "Carplus kompaniyasining ichki CRM",
        purpose:
            "Ommaviy quote mijozga. CRM esa sales/admin uchun: lead ro‘yxati, profil, Autoconvert (AC) ga yuborish, agent biriktirish va kunlik/oylik statistika. Hali to‘liq tugallanmagan, lekin ishlatiladi.",
        tasks: [
            "Google orqali kirish, JWT rol (admin / sales-agent).",
            "Lead jadvali: filtr, qidiruv, sahifalash, Excel export.",
            "Lead profilidan Autoconvert ga yuborish / qayta yuborish.",
            "Stats grafigi, users/agents boshqaruvi (admin).",
        ],
        stack: ["Next.js 15", "React 19", "Tailwind 4", "shadcn/Radix", "TanStack Table", "TanStack Query", "Redux", "Zustand", "NextAuth 5", "Recharts"],
        learned:
            "Ichki B2B panel: rollar, data-table, London vaqti filtrlari, tashqi Hono API bilan Bearer oqimi. Tugallanmagan mahsulotda nima ishlashi va nima mock ekanini aniq ajratish, FTU/403 siyosati. Operator UX (status pipeline, AC) biznes jarayonini UI da ifodalashni o‘rgatdi.",
    },
    // {
    //     slug: "coversimple",
    //     title: "CoverSimply",
    //     year: "2025",
    //     kind: "ish",
    //     summary: "UK biznes sug‘urtasi brokeri uchun landing — Carplus quote shablonidan fork, mahsulot hali o‘tish holatida.",
    //     purpose:
    //         "Public liability, professional indemnity va employers’ liability ni tushuntiruvchi broker landing. Mijozni formaga olib borish. Hozir forma hali car finance leadiga yoziladi — sug‘urta savollari keyingi bosqich.",
    //     tasks: [
    //         "Sug‘urta copy, FAQ, cover turlari va narx bloklari.",
    //         "Mavjud ko‘p qadamli forma shablonini yangi brendga ulash.",
    //         "Alohida GTM konteyneri bilan kampaniya o‘lchash.",
    //     ],
    //     stack: ["Next.js 16", "React 19", "Redux Toolkit", "Sass", "Tailwind"],
    //     learned:
    //         "Shablonni boshqa vertical (insurance) ga ko‘chirish: branding oson, domain model esa qiyin. Chala o‘tish (landing yangi, forma eski) qanday texnik qarz berishini ko‘rdim — keyingi ish forma savollarini mahsulotga moslash.",
    // },
    {
        slug: "lugat",
        title: "Lug‘at",
        year: "2022–2023",
        kind: "ish",
        url: "https://virtual-lugat.uz",
        summary: "O‘zbek tili izohli lug‘ati",
        purpose: "O‘zbek so‘zlarining ma’nolarini qidirish. Admin so‘z va izohlarni kiritadi, foydalanuvchi ochiq qidiruv kabi ishlatadi.",
        tasks: ["Admin: so‘z va ma’lumot kiritish.", "Foydalanuvchi: qidiruv va izohni o‘qish.", "API va UI ni boshidan yozish."],
        stack: ["React", "Redux", "Node.js", "Express", "Knex", "PostgreSQL"],
        learned:
            "Birinchi to‘liq stack: ma’lumot modeli, admin/user ajratish, Redux holat. G‘oya o‘zimniki bo‘lgani uchun mahsulot qarorlarini ham o‘zim qildim — keyingi loyihalarga poydevor.",
    },
    {
        slug: "hotel-portal",
        title: "Hotel portal",
        year: "2022–2024",
        kind: "ish",
        url: "https://karvonsaroyi.uz",
        summary: "Mehmonxona ish kuni portali — mehmonlar bilan ishlashni elektronlashtirish.",
        purpose:
            "Mehmonxona xodimlari mehmon, xona va kunlik ishlarni qog‘ozsiz yuritsin. Loyiha bir necha dastur: Main, Admin; Mobile va ochiq web-sayt tugatilmagan.",
        tasks: ["Asosiy ish paneli va admin.", "Bron/mehmon oqimini backendda modellash.", "React Native urinishi (tugatilmagan)."],
        stack: ["Node.js", "Express", "Knex", "PostgreSQL", "Nginx", "React", "React Native", "Material UI", "Formik", "Tailwind"],
        learned:
            "Bir necha client (web admin, main, mobile) ni bitta API atrofida qurish. Mehmonxona domeni: xona, band, mehmon hayoti. Tugatilmagan qismlar scope ni qanday kesish kerakligini o‘rgatdi.",
    },
    {
        slug: "booking",
        title: "Booking",
        year: "2022–2024",
        kind: "ish",
        url: "https://transoxania.travel",
        summary: "Internet orqali mehmonxona band qilish.",
        purpose: "Mehmonxona ichki tizimidan tashqari, tashqi foydalanuvchi ham xona band qila olsin. Ochiq dastur.",
        tasks: ["Xona qidiruv va band qilish oqimi.", "Hotel portal API bilan ishlash.", "Ommaviy UI."],
        stack: ["Node.js", "Express", "Knex", "React"],
        learned: "Ichki portal va ochiq booking ni ajratish: ruxsat, narx, mavjudlik. B2B tizimning B2C yuzini qanday chiqarish.",
    },
    {
        slug: "hrp",
        title: "HRP (HR & Payroll)",
        year: "2022–2025",
        kind: "ish",
        url: "https://admin.ishkuni.uz/",
        summary: "Kadrlar va buxgalteriya uchun yordamchi — xodim, lavozim, ko‘nikma, maosh. O‘ndan oshiq dasturga bo‘lingan.",
        purpose: "HR va payroll ishlarining elektron varianti: ishga olish, lavozim, ko‘nikmalar, maosh hisobi va yuzlab kichik jarayonlar.",
        tasks: [
            "Katta admin UI: jadvallar, formalar, rollar.",
            "Redis kesh, Postgres, Nginx bilan API.",
            "Bir necha UI kutubxonalarini bitta mahsulotda yuritish.",
            "Ba’zi qismlarda entity model va jamoa yo‘nalishi.",
        ],
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
        learned:
            "Eng katta Transoxania tizimi: modullarga bo‘lish, mixed UI kit (MUI + Ant + Bootstrap) qarzini yashash, TypeScript ga o‘tish. HR domeni murakkab — ma’lumot modeli va TeamLead tajribasi shu yerda qotdi.",
    },
    {
        slug: "tashrif",
        title: "tashrif.info",
        year: "2025–2026",
        kind: "mahsulot",
        url: "https://tashrif.info",
        repo: "https://www.npmjs.com/package/tashrif",
        summary: "Web analitika app",
        purpose:
            "Og‘ir reklama-tracker o‘rniga: Next.js saytga bitta komponent, ochiq clientId, domen Origin tekshiruvi. Haqiqiy sahifa ko‘rishlari, mamlakat, yo‘l, referrer. Hisobotlar Telegramga.",
        tasks: [
            "Collect API, GeoIP, 3 oylik retention.",
            "Dashboard: trafik, sahifalar, loglar, WebSocket jonli yangilanish.",
            "`tashrif` NPM paketi (`<Tashrif />`).",
            "Google kirish, owner/admin/viewer, Telegram bot (Grammy) PDF/stat hisobot.",
        ],
        stack: ["Next.js 16", "React 19", "next-intl", "NextAuth", "Bun", "Hono", "Drizzle", "PostgreSQL", "WebSocket", "grammY", "Recharts", "Zod"],
        learned:
            "To‘rt qismli mahsulot (UI, API, SDK, bot) ni versiyalash va birga chiqarish. Cookie-lessga yaqin tracking, Origin himoyasi, rate limit. NPM paket va peer dependency. Real-time board + scheduled PDF — operatsion mahsulot qanday yashashini ko‘rdim. O‘z saytlarimda ham shu SDK ni ishlataman.",
    },
    {
        slug: "sanoq",
        title: "sanoq.uz",
        year: "2025",
        kind: "mahsulot",
        url: "https://sanoq.uz",
        summary: "Sanoq sistemalari haqida website",
        purpose:
            "Talaba, dasturchi va o‘qituvchiga 2–36 asos oralig‘ida o‘tkazish, qadamma-qadam yechim va tanlangan sistemada hisob. Hisob ochish yo‘q, hisob brauzerda.",
        tasks: [
            "Konvertor: butun/kasr, manfiy, KaTeX izoh.",
            "Kalkulyator: URL da asos, klaviatura, SEO sahifalar.",
            "13 til, middleware, maqolalar.",
            "Dark/light, ulashish.",
        ],
        stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "mathjs", "KaTeX", "Bun"],
        learned:
            "i18n ni URL + cookie + Accept-Language da yuritish, hreflang/SEO. Kasr aniqlik (`bigint` + mathjs). Ta’lim mahsulotida tushuntirish UX — natija yetarli emas, yechim ham kerak. Ko‘p tilli kontentni qanday masshtablash.",
    },
    {
        slug: "markdown",
        title: "markdown.uz",
        year: "2025",
        kind: "mahsulot",
        url: "https://markdown.uz",
        repo: "https://github.com/jarkurghan/markdown",
        summary: "Online real-time markdown muharriri",
        purpose: "README, qayd, blog qoralamasini brauzerda yozish. Matn localStorage da; serverga kontent ketmaydi. Import/eksport `.md`.",
        tasks: ["Split-view, mobil yorliqlar, formatlash paneli.", "GitHub Flavored Markdown preview.", "UZ/EN sahifalar, tema, klaviatura yorliqlari."],
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "marked"],
        learned:
            "Client-only muharrir: debounce saqlash, fayl API, split ratio. Previewda HTML xavfsizligi haqida o‘ylash. Oddiy vosita ham yaxshi tipografiya va i18n bilan mahsulot bo‘lishi.",
    },
    {
        slug: "githubchi",
        title: "githubchi.uz",
        year: "2026",
        kind: "mahsulot",
        url: "https://githubchi.uz",
        summary: "GitHub uchun soxta commitlar qilish va contribution grafik chizish dasturi",
        purpose:
            "OAuth orqali kirib, yil/pattern/zichlik tanlash, preview ko‘rish va faqat `githubchi` reposiga commit yozish. Bekor qilish — oldingi HEAD ga qaytish.",
        tasks: [
            "NextAuth GitHub + API JWT ko‘prigi.",
            "Patternlar (shuffle, text, employeer, hobbichi) UI va API da bir xil.",
            "SSE orqali fork/clone/commit/push jarayoni.",
            "Postgres da harakatlar tarixi.",
        ],
        stack: ["Next.js 16", "NextAuth 5", "Tailwind 4", "Bun", "Hono", "Drizzle", "PostgreSQL", "GitHub API"],
        learned:
            "Git operatsiyalarini serverda xavfsiz cheklash (faqat bitta repo). SSE progress UX. OAuth token ni API ga uzatish. Foydalanuvchiga GitHub graph kechikishi va mas’uliyat haqida ochiq yozish — mahsulot etikasi.",
    },
    {
        slug: "taxmin",
        title: "taxmin.uz",
        year: "2026",
        kind: "mahsulot",
        url: "https://taxmin.uz",
        summary: "FIFA JCH 2026 uchun hisob taxmin, ball va reyting — web, Mini App va bot.",
        purpose: "O‘yin oldidan bitta hisob yozish, tugagach avtomatik ball, boshqalar taxminiga izoh/emoji, reyting. Kirish Telegram orqali.",
        tasks: ["football-data.org dan o‘yinlar, ball qoidalari.", "Web + Telegram Mini App + grammY bot.", "JWT, Postgres, o‘yin tugagach e’lon."],
        stack: ["Next.js 15", "React 19", "Zustand", "Bun", "Hono", "Drizzle", "PostgreSQL", "grammY", "Telegram Mini App"],
        learned:
            "Bitta o‘yin domenini uch kanalda (sayt, Mini App, bot) bir API ga ulash. Telegram Login va initData. Sport ballini qayta hisoblash (skor tuzatilsa). Vaqt zonasi va «5 daqiqa oldin yopish» qoidalari.",
    },
    {
        slug: "domain-sale",
        title: "Domen sotiladi",
        year: "2026",
        kind: "mahsulot",
        repo: "https://github.com/jarkurghan/domain-sale",
        summary: "Sotilayotgan domenlar uchun bitta landing — host nomini o‘zi ko‘rsatadi, CTA Telegram.",
        purpose: "Parked sahifa: qaysi domen ochilsa, o‘sha nom chiqadi. Katalog/CMS yo‘q. Bir build ko‘p domenga.",
        tasks: ["Host header / hostname ni sarlavhada ko‘rsatish.", "Domen bo‘yicha tashrif clientId.", "Docker + standalone."],
        stack: ["Next.js 16", "React 19", "TypeScript", "tashrif"],
        learned: "Minimal landing, multi-tenant host, request-time Host. Keraksiz stack qo‘shmaslik — ba’zan CSS yetadi.",
    },
    {
        slug: "monitoring",
        title: "bot-stat.nazirov.dev",
        year: "2025–2026",
        kind: "mahsulot",
        url: "https://bot-stat.nazirov.dev",
        summary: "Shaxsiy telegram botlarim statistikasini ko'rish uchun dashboard",
        purpose: "Namoz, Insta saver, Anime, Multfilm botlaridagi user, status, ko‘rish/yuklash raqamlarini grafikda ko‘rish. Ichki vosita.",
        tasks: ["To‘rt Postgres ulanish, faqat SELECT.", "Har bot uchun o‘ziga xos kartalar va Recharts.", "Hono API + Next.js server fetch."],
        stack: ["Next.js 16", "React 19", "Recharts", "Bun", "Hono", "Drizzle", "PostgreSQL"],
        learned:
            "Read-replica uslubidagi monitoring: bot kodiga tegmasdan analytics. Ko‘p DB, bitta API prefiksi. Ichki vositada auth yo‘qligi — tarmoq bilan yopish kerakligini eslatadi.",
    },
    {
        slug: "namoz-bot",
        title: "Namoz vaqtlari bot",
        year: "2024–2026",
        kind: "bot",
        url: "https://t.me/bugungi_namoz_bot",
        repo: "https://github.com/jarkurghan/namoz-vaqtlari-bot",
        summary: "Tanlangan hudud va soatda har kuni namoz vaqtlarini yuboradigan Telegram bot.",
        purpose: "O‘zbekiston shaharlari uchun bomdod–xufton jadvali. islom.uz taqvimidan. Lotin/kirill, obuna, Ramazon qo‘shimchalari.",
        tasks: ["Hudud va tarqatma soatini sozlash.", "Kunlik scheduler, Playwright scraping.", "Admin log, blok holati."],
        stack: ["Bun", "grammY", "Hono", "PostgreSQL", "Drizzle", "Playwright"],
        learned:
            "Cron/scheduler, webhook, tashqi saytdan ma’lumot olish barqarorligi. Foydalanuvchi tili va viloyat daraxti. Uzoq yashovchi bot: blok, qayta ochish, xato logi.",
    },
    {
        slug: "insta-saver",
        title: "Insta saver bot",
        year: "2024–2026",
        kind: "bot",
        url: "https://t.me/insta_yuklagich_bot",
        summary: "Instagram post/reel havolasini yuborasiz — bot media ni Telegramga qaytaradi.",
        purpose: "Sahifani ochmasdan reels/postni chatga saqlash. Shaxsiy chat va guruh.",
        tasks: ["URL parse, media yuklash, media group.", "User/guruh statistikasi monitoring uchun.", "Webhook + Postgres."],
        stack: ["Bun", "grammY", "Hono", "PostgreSQL", "Drizzle", "axios"],
        learned: "Tashqi sayt o‘zgarishiga chidamli yuklash, guruh vs private farqi, rate va fayl hajmi. Foydalanish hisobini keyin dashboardga ulash.",
    },
    {
        slug: "anime-bot",
        title: "AniUZ bot",
        year: "2024–2026",
        kind: "bot",
        url: "https://t.me/aniuz_bot",
        repo: "https://github.com/jarkurghan/anime-bot",
        summary: "O‘zbekcha dub anime katalogi — qismni tanlaysiz, video shaxsiy chatga nusxalanadi.",
        purpose: "Kanal postlarini `copyMessage` qilib tomoshabinga yetkazish. Qidiruv, dub studiya, sahifalash.",
        tasks: ["Katalog, qism, dub tanlash UI (inline).", "User sahifa holati, deep link.", "Admin va statistika."],
        stack: ["Bun", "grammY", "Hono", "PostgreSQL", "Drizzle"],
        learned: "Katta inline menyu holati, Telegram file_id/copyMessage modeli. Kontent huquqi va kanal-bot juftligi. Qidiruv va pagination bot UX.",
    },
    {
        slug: "multik-bot",
        title: "Multfilm bot + Mini App",
        year: "2025–2026",
        kind: "bot",
        url: "https://t.me/uz_multfilm_bot",
        summary: "Kanalidagi kod orqali o‘zbekcha multfilmlarni olish; Netflix uslubidagi Mini App.",
        purpose: "Kod (masalan M319) yoki Mini App katalogidan tanlash — bot videoni shaxsiy chatga yuboradi. Kontent qo‘yish alohida operator botida.",
        tasks: ["Kod qidiruv, copyMessage.", "Hono katalog API + Next.js Mini App.", "Broadcast va statistika."],
        stack: ["Bun", "grammY", "Hono", "Drizzle", "PostgreSQL", "Next.js 16", "Telegram Mini App"],
        learned:
            "Public bot, operator bot va Mini App ni bitta bazaga ulash. Kod-as-SKU. WebApp «Ko‘rish» tugmasi botga qaytaradi — Telegram ichidagi mahsulot oqimi.",
    },
    {
        slug: "movie-content-bot",
        title: "Movie content maker",
        year: "2025–2026",
        kind: "bot",
        summary: "Kanal jamoasi uchun operator bot: IMDb, post matni, kod, asosiy kanalga chiqarish.",
        purpose:
            "Tomoshabin buni ko‘rmaydi. Admin IMDb dan ma’lumot, tarjima, poster va videoni omborga, kartochkani kanalga qo‘yadi — public bot shu yozuvlardan o‘qiydi.",
        tasks: ["IMDb scrape, Gemini tarjima.", "Film/serial rejimlari, kod generator.", "Faqat kanal administratorlari."],
        stack: ["Node.js", "grammY", "PostgreSQL", "Drizzle", "Playwright", "Gemini"],
        learned:
            "CMS ni chatda qilish: sessiya, ruxsat, AI yordami. Public va operator tokenlarini ajratish. Kontent pipeline (ombor kanal → asosiy kanal → bot).",
    },
    {
        slug: "ovushtabot",
        title: "Ovush ta bot",
        year: "2025–2026",
        kind: "bot",
        repo: "https://github.com/jarkurghan/ovushtabot",
        summary: "Shaxsiy qarz daftari: kim oldi/berdi, qaytarish, muddat, ikkinchi tomon bilan ulashish.",
        purpose: "Do‘stlar o‘rtasidagi ovushni Telegramda yozish. Kontaktga Telegram shart emas. Ikkala tomon botda bo‘lsa, qarz sinxron.",
        tasks: ["Qarz/qaytarish, netting, yopilish.", "Eslatma soati, lotin/kirill.", "Ulashish tokeni."],
        stack: ["Bun", "grammY", "Hono", "PostgreSQL", "Drizzle"],
        learned:
            "Moliyaviy domen: transaction, yo‘nalish, ortiqcha qaytarish. In-memory sessiya qadamlari. Sodda tilda («500 ming», «1 mln») parse. Ikkala tomonli ulashish — conflict va ruxsat.",
    },
    {
        slug: "imdb-info-bot",
        title: "IMDb info bot",
        year: "2025",
        kind: "bot",
        repo: "https://github.com/jarkurghan/imdb-info-bot",
        summary: "IMDb havolasini yuborasiz — meta ma’lumot va o‘zbekcha syujet qaytadi.",
        purpose: "Film sahifasini ochmasdan qisqa kartochka. Playwright + Gemini tarjima.",
        tasks: ["Title URL ni scrape qilish.", "Syujetni soddalashtirib tarjima.", "Typing action, admin log."],
        stack: ["grammY", "Playwright", "Gemini", "PostgreSQL"],
        learned: "Nozik scrape (`__NEXT_DATA__`), AI ni faqat tarjima uchun. Kutish UX. Tashqi sahifa o‘zgarsa bot sinishi — izolyatsiya.",
    },
    {
        slug: "video-meta-bot",
        title: "Video meta bot",
        year: "2025",
        kind: "bot",
        repo: "https://github.com/jarkurghan/video-meta-bot",
        summary: "Video yuborasiz — sifat, davomiylik, hajm, o‘lcham matn qilib qaytadi.",
        purpose: "Faylni qayta kodlamasdan Telegram metadatasini o‘qish. Tezkor tekshiruv vositasi.",
        tasks: ["`message.video` maydonlarini formatlash.", "Sifatni resolution dan taxmin qilish."],
        stack: ["grammY", "PostgreSQL"],
        learned: "Telegram file object yetarli bo‘lsa, ffmpeg shart emas. Kichik botni ham user/status modeliga solish (keyin monitoring).",
    },
    {
        slug: "video-thumbnail-bot",
        title: "Video thumbnail bot",
        year: "2025",
        kind: "bot",
        repo: "https://github.com/jarkurghan/video-thumbnail-bot",
        summary: "Video + rasm juftligi — bot videoni shu rasm cover qilib qaytaradi.",
        purpose: "Kompyuterda transcode qilmasdan Telegram `cover` API. Kanal postlari uchun preview.",
        tasks: ["Sessiya: video keyin rasm yoki aksincha.", "Media group dan eng katta photo."],
        stack: ["grammY", "PostgreSQL"],
        learned: "Bot API ning tayyor imkoniyatini ishlatish. In-memory sessiya restart da yo‘qolishi — qachon Redis kerakligi.",
    },
    {
        slug: "eski-portfolio",
        title: "Eski portfolio",
        year: "2024",
        kind: "oquv",
        url: "https://portfolio.jarkurghan.uz/",
        repo: "https://github.com/jarkurghan/portfolio",
        summary: "Ikki yil oldingi shaxsiy sayt — HTML, CSS, JS, uch til. Backend yo‘q.",
        purpose: "Tajriba va loyihalarni bir sahifada ko‘rsatish. CMS/forma yo‘q.",
        tasks: ["Sticky sider layout, loyiha kartalari.", "`?lan=` bilan UZ/RU/EN."],
        stack: ["HTML", "CSS", "JavaScript"],
        learned: "Kontentni qo‘lda yangilamaslik qancha tez eskiradi. Hozirgi portfolio shu darsdan: ma’lumotni tuzilma qilib, yangi stackda qayta yozish.",
    },
    {
        slug: "mern-1",
        title: "Movies app",
        year: "~2023",
        kind: "oquv",
        repo: "https://github.com/jarkurghan/mern-1",
        summary: "Netflix uslubidagi katalog: TMDB, treyler, Firebase, Stripe obuna. Bo‘sh vaqtda qiziqish.",
        purpose: "Katalog + to‘lov devorini o‘rganish. Haqiqiy streaming emas.",
        tasks: ["Auth, tarif tanlash, My List.", "TMDB qatorlari, YouTube treyler modal."],
        stack: ["Next.js 13", "React 18", "Firebase", "Stripe", "Zustand", "Formik", "Tailwind", "MUI"],
        learned:
            "Firebase + Stripe + tashqi API ni bitta Next appda ulash. Cookie va client auth ziddiyati. Obuna UX. Nomdagi «MERN» va haqiqiy stack farqi — hujjat yozish muhim.",
    },
    {
        slug: "mern-2",
        title: "Kurslar katalogi",
        year: "~2023",
        kind: "oquv",
        repo: "https://github.com/jarkurghan/mern-2",
        summary: "OwlTop uslubidagi kurs sahifalari — ma’lumot `db.json`, to‘lov/login yo‘q.",
        purpose: "Landing, sidebar katalog, kurs kartasi, reyting, sharh UI sini mashq qilish.",
        tasks: ["getServerSideProps, CSS modules, Storybook.", "Sharh formasi (JSONPlaceholder)."],
        stack: ["Next.js 13", "React 18", "CSS modules", "Framer Motion", "Storybook", "Axios"],
        learned: "Dizayn tizimi, HOC layout, mock API. Nima ishlamasa ochiq yozish. Keyingi real mahsulotlarga qaraganda bu — UI mashq.",
    },
    {
        slug: "super-tour",
        title: "Super Tour",
        year: "~2024",
        kind: "oquv",
        repo: "https://github.com/jarkurghan/super-tour",
        summary: "Sayohat agentligi landing — suhbatga borganimda sinov task. Bron tizimi emas.",
        purpose: "Hero, xizmat kartalari, i18n, ariza formasi namunasini vaqt ichida chiqarish.",
        tasks: ["EN/UZ/RU, sticky navbar.", "Vite + React + Tailwind UI."],
        stack: ["React 18", "Vite", "React Router", "Tailwind"],
        learned:
            "Vaqt cheklangan task: scope ni UI ga qisqartirish. i18n context. Qaysi joylar chala qolishi (forma submit, alohida sahifalar) — suhbatda shu haqda ochiq gapirish.",
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
