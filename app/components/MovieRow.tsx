import { Movie } from "../lib/movies";
import MovieCard from "./MovieCard";

export default function MovieRow({
    title,
    subtitle,
    movies,
    href,
}: {
    title: string;
    subtitle: string;
    movies: Movie[];
    href?: string;
}) {
    if (movies.length === 0) return null;
    return (
        <section className="max-w-7xl mx-auto px-6 py-2">
            <div className="flex items-baseline justify-between mb-5">
                <div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-zinc-500 text-sm mt-0.5">{subtitle}</p>
                </div>
                {href && (
                    <a href={href} className="text-[#f5c518] hover:text-[#ddb000] text-sm font-medium transition-colors whitespace-nowrap">
                        Barchasini ko'rish →
                    </a>
                )}
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}
