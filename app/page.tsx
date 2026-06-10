import Image from "next/image";
import { Movie, posterUrl, fetchMovies, BASE } from "./lib/movies";
import MovieRow from "./components/MovieRow";
import KorishButton from "./components/KorishButton";

const FEATURED_FALLBACK: Movie = {
    id: 0,
    title: "MULTIK",
    year: 2024,
    rating: 0,
    votes: "—",
    genres: ["Animatsiya"],
    duration: "—",
    bg: "linear-gradient(135deg, #0c1445 0%, #1a0a3e 50%, #0d2137 100%)",
};

export default async function Home() {
    const [featuredList, featuredAll, latestMovies, latestViewedMovies, mostWatchedMovies, series] = await Promise.all([
        fetchMovies(`${BASE}/most-watched/today/1`),
        fetchMovies(`${BASE}/most-watched/today?limit=7`),
        fetchMovies(`${BASE}/latest?limit=6`),
        fetchMovies(`${BASE}/latest/view?limit=6`),
        fetchMovies(`${BASE}/most-watched?limit=6`),
        fetchMovies(`${BASE}/series`),
    ]);
    const featured = featuredList[0] ?? FEATURED_FALLBACK;
    return (
        <div className="min-h-screen bg-[#141414] text-white">
            {/* Hero */}
            <section className="relative overflow-hidden" style={{ background: featured.bg }}>
                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-[#141414] via-transparent to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center sm:items-end gap-8">
                    <div
                        className="relative shrink-0 w-44 h-64 rounded-xl shadow-2xl overflow-hidden"
                        style={{ background: featured.bg, boxShadow: "0 25px 50px rgba(0,0,0,0.6)" }}
                    >
                        {featured.imdb_id && (
                            <Image src={posterUrl(featured.imdb_id)} alt={featured.title} fill className="object-cover" sizes="176px" priority />
                        )}
                    </div>
                    <div className="flex flex-col gap-3 pb-2">
                        <span className="text-[#f5c518] text-xs font-bold uppercase tracking-widest">Tavsiya qilinadi</span>
                        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{featured.title}</h1>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                            <span>{featured.year}</span>
                            <span className="text-zinc-700">·</span>
                            <span>{featured.duration}</span>
                            <span className="text-zinc-700">·</span>
                            <span>{featured.genres.join(" / ")}</span>
                        </div>

                        <p className="text-zinc-300 text-sm max-w-lg leading-relaxed">{featured.description}</p>
                        <div className="flex gap-3 mt-1">
                            <KorishButton
                                code={featured.code}
                                className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2.5 rounded-lg transition-colors text-sm h-9 cursor-pointer"
                            />
                            <div className="flex items-center gap-2 h-9">
                                <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg h-9">
                                    <span className="text-[#f5c518] text-xl leading-none">★</span>
                                    <div>
                                        <p className="text-zinc-400 font-black text-md leading-none">{featured.rating.toFixed(1)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 h-9">
                                <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg h-9">
                                    <span className="text-[#f5c518] text-xl leading-none">★</span>
                                    <div>
                                        <p className="text-zinc-500 text-sm mt-0.5">{featured.votes} ovoz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MovieRow title="So'nggi ko'rilganlar" subtitle="Foydalanuvchilar yaqinda ko'rgan multfilmlar" movies={latestViewedMovies} href="/l/v" />
            <MovieRow title="Yangi qo'shilganlar" subtitle="Yaqinda qo'shilgan multfilmlar" movies={latestMovies} href="/l" />
            <MovieRow title="Eng qaynoq" subtitle="Bugun eng ko'p ko'rilyotgan multfilmlar" movies={featuredAll.slice(1)} href="/m/t" />
            <MovieRow title="Eng ko'p ko'rilganlar" subtitle="Barcha vaqtlar bo'yicha eng mashhur multfilmlar" movies={mostWatchedMovies} href="/m" />

            {/* Multseriallar */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-xl font-bold text-white mb-3">Multseriallar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {series.map((movie) => (
                        <a
                            key={movie.id}
                            href={movie.code ? `/s/${movie.code}` : "#"}
                            className="flex gap-4 bg-[#1c1c1c] hover:bg-[#252525] rounded-xl p-3 transition-colors duration-200 cursor-pointer group"
                        >
                            <div className="relative w-20 h-28 rounded-lg shrink-0 overflow-hidden" style={{ background: movie.bg }}>
                                {movie.imdb_id && <Image src={posterUrl(movie.imdb_id)} alt={movie.title} fill className="object-cover" sizes="80px" />}
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                <div>
                                    <p className="text-white font-semibold text-sm leading-snug group-hover:text-[#f5c518] transition-colors duration-200">
                                        {movie.title}
                                    </p>
                                    <p className="text-zinc-500 text-xs mt-1">
                                        {movie.year} · {movie.duration}
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="text-[#f5c518] text-xs">★</span>
                                        <span className="text-zinc-300 text-xs font-semibold">{movie.rating.toFixed(1)}</span>
                                        <span className="text-zinc-600 text-xs">({movie.votes})</span>
                                    </div>
                                    {movie.description && <p className="text-zinc-500 text-xs mt-2 line-clamp-2 leading-relaxed">{movie.description}</p>}
                                </div>
                                <div className="flex gap-1 mt-2 flex-wrap">
                                    {movie.genres.slice(0, 3).map((g) => (
                                        <span key={g} className="text-zinc-500 text-xs bg-zinc-800 px-1.5 py-0.5 rounded">
                                            {g}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

        </div>
    );
}
