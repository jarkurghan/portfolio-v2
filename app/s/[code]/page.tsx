import Image from "next/image";
import { notFound } from "next/navigation";
import { POSTER_GRADIENTS, posterUrl } from "../../lib/movies";
import KorishButton from "../../components/KorishButton";

const BASE = process.env.NEXT_PUBLIC_GET_API;

type ApiSeriesInfo = {
    id: number;
    code: string;
    imdb_id?: string;
    title: string;
    year?: string;
    genres?: string[];
    duration?: string;
    rating?: string;
    vote?: string;
    plot?: string;
    total_count?: number;
};

type ApiEpisode = {
    id: number;
    code?: string;
    imdb_id?: string;
    title?: string;
    plot?: string;
    total_count?: number;
};

async function fetchSeriesInfo(code: string): Promise<ApiSeriesInfo | null> {
    try {
        const res = await fetch(`${BASE}/series?limit=500`);
        if (!res.ok) return null;
        const json = await res.json();
        return (json.data as ApiSeriesInfo[]).find((s) => s.code === code) ?? null;
    } catch {
        return null;
    }
}

async function fetchEpisodes(code: string): Promise<ApiEpisode[]> {
    try {
        const res = await fetch(`${BASE}/series/${code}`);
        if (!res.ok) return [];
        const json = await res.json();
        return (json.data as ApiEpisode[]) ?? [];
    } catch {
        return [];
    }
}

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;

    const [info, episodes] = await Promise.all([fetchSeriesInfo(code), fetchEpisodes(code)]);

    if (!info && episodes.length === 0) notFound();

    const series = info ?? { id: 0, code, title: episodes[0]?.title?.split("\n")[0] ?? code };
    const bg = POSTER_GRADIENTS[series.id % POSTER_GRADIENTS.length];
    const rating = parseFloat(series.rating ?? "0") || 0;

    return (
        <div className="min-h-screen bg-[#141414] text-white">
            {/* Hero */}
            <section className="relative overflow-hidden" style={{ background: bg }}>
                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-[#141414] via-transparent to-transparent" />
                <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-14">
                    <a href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-8">
                        ← Orqaga
                    </a>
                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                        {/* Poster */}
                        <div
                            className="relative shrink-0 w-44 h-64 rounded-xl shadow-2xl overflow-hidden"
                            style={{ background: bg, boxShadow: "0 25px 50px rgba(0,0,0,0.6)" }}
                        >
                            {series.imdb_id && (
                                <Image src={posterUrl(series.imdb_id)} alt={series.title} fill className="object-cover" sizes="176px" priority />
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-3 py-2 max-w-2xl">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[#f5c518] text-xs font-bold uppercase tracking-widest">Serial</span>
                                {episodes.length > 0 && <span className="text-zinc-600 text-xs">· {episodes.length} qism</span>}
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{series.title}</h1>

                            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                                {series.year && <span>{series.year}</span>}
                                {series.duration && (
                                    <>
                                        <span className="text-zinc-700">·</span>
                                        <span>{series.duration}</span>
                                    </>
                                )}
                                {series.genres && series.genres.length > 0 && (
                                    <>
                                        <span className="text-zinc-700">·</span>
                                        <span>{series.genres.join(" / ")}</span>
                                    </>
                                )}
                            </div>

                            {rating > 0 && (
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg">
                                        <span className="text-[#f5c518] text-xl leading-none">★</span>
                                        <div>
                                            <p className="text-white font-black text-lg leading-none">{rating.toFixed(1)}</p>
                                            <p className="text-zinc-500 text-xs mt-0.5">{series.vote} ovoz</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {series.plot && <p className="text-zinc-300 text-sm leading-relaxed max-w-lg">{series.plot}</p>}

                            {series.genres && series.genres.length > 0 && (
                                <div className="flex gap-2 flex-wrap">
                                    {series.genres.map((g) => (
                                        <span key={g} className="text-zinc-300 text-xs bg-zinc-800 border border-zinc-700 px-2.5 py-1 rounded-full">
                                            {g}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Episodes */}
            {episodes.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 py-10">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Qismlar
                        <span className="text-zinc-600 font-normal text-base ml-2">({episodes.length})</span>
                    </h2>
                    <div className="divide-y divide-zinc-800/60">
                        {episodes.map((ep, i) => {
                            const rawTitle = ep.title ?? "";
                            const episodeName = rawTitle.includes("\n") ? rawTitle.split("\n").slice(1).join(" ") : rawTitle;
                            return (
                                <div
                                    key={ep.id ?? i}
                                    className="flex items-center gap-4 py-5 hover:bg-zinc-900/40 px-3 -mx-3 rounded-xl transition-colors duration-200"
                                >
                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-semibold leading-snug">{episodeName || `${i + 1}-qism`}</p>
                                        {ep.plot && <p className="text-zinc-400 text-xs mt-1.5 line-clamp-3 leading-relaxed">{ep.plot}</p>}

                                        <div className="flex items-baseline gap-2">
                                            {ep.code && <p className="text-zinc-600 text-xs font-mono font-bold mb-0.5">{ep.code}</p>}
                                            {ep.total_count != null && ep.total_count > 0 && (
                                                <p className="text-zinc-600 text-xs mt-2">{ep.total_count} marta ko'rilgan</p>
                                            )}
                                        </div>
                                    </div>

                                    <KorishButton
                                        code={ep.code}
                                        className="shrink-0 flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
}
