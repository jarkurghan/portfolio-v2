import Image from "next/image";
import { Movie, posterUrl } from "../lib/movies";
import KorishButton from "./KorishButton";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="shrink-0 w-48">
            <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg" style={{ background: movie.bg }}>
                {movie.imdb_id && (
                    <Image src={posterUrl(movie.imdb_id)} alt={movie.title} fill className="object-cover" sizes="160px" />
                )}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold text-xs leading-tight">{movie.title}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{movie.year}</p>
                </div>
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 flex items-center gap-0.5">
                    <span className="text-[#f5c518] text-xs">★</span>
                    <span className="text-white text-xs font-semibold">{movie.rating.toFixed(1)}</span>
                </div>
            </div>
            <div className="mt-2.5 px-0.5">
                <p className="text-white text-xs font-medium leading-tight line-clamp-2 min-h-[2.5em]">{movie.title}</p>
                <p className="text-zinc-500 text-xs mt-0.5">
                    {movie.year} · {movie.duration}
                </p>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-[#f5c518bb] text-xs font-bold">★ {movie.rating.toFixed(1)}</span>
                    <span className="text-zinc-500 text-xs">({movie.votes})</span>
                </div>
                <KorishButton
                    code={movie.code}
                    className="mt-2 w-full flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs py-1.5 rounded-lg transition-colors cursor-pointer"
                />
            </div>
        </div>
    );
}
