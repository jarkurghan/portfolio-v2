import { fetchMovies, BASE } from "../lib/movies";
import MovieGrid from "../components/MovieGrid";

export default async function Page() {
    const movies = await fetchMovies(`${BASE}/most-watched?limit=100`);
    return (
        <div className="min-h-screen bg-[#141414] text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex items-center gap-3 mb-8">
                    <a href="/" className="text-zinc-500 hover:text-white transition-colors text-sm">
                        ← Orqaga
                    </a>
                    <span className="text-zinc-700">·</span>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Eng ko'p ko'rilganlar</h1>
                        <p className="text-zinc-500 text-sm mt-0.5">Barcha vaqtlar bo'yicha eng mashhur multfilmlar</p>
                    </div>
                </div>
                <MovieGrid movies={movies} />
            </div>
        </div>
    );
}
