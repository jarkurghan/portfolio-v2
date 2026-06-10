import Image from "next/image";
import { Movie, posterUrl } from "../lib/movies";
import KorishButton from "./KorishButton";

export default function MovieGrid({ movies }: { movies: Movie[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="flex gap-4 bg-[#1c1c1c] hover:bg-[#252525] rounded-xl p-3 transition-colors duration-200 cursor-pointer group"
                >
                    <div
                        className="relative w-20 h-28 rounded-lg shrink-0 overflow-hidden"
                        style={{ background: movie.bg }}
                    >
                        {movie.imdb_id && (
                            <Image
                                src={posterUrl(movie.imdb_id)}
                                alt={movie.title}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        )}
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
                            {movie.description && (
                                <p className="text-zinc-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                                    {movie.description}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-between mt-2 gap-2">
                            <div className="flex gap-1 flex-wrap min-w-0">
                                {movie.genres.slice(0, 3).map((g) => (
                                    <span key={g} className="text-zinc-500 text-xs bg-zinc-800 px-1.5 py-0.5 rounded">
                                        {g}
                                    </span>
                                ))}
                            </div>
                            <KorishButton
                                code={movie.code}
                                className="shrink-0 flex items-center gap-1.5 bg-zinc-800 hover:bg-[#f5c518] hover:text-black text-zinc-300 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
