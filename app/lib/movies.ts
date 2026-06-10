export type ApiMovie = {
    id: number;
    code?: string;
    imdb_id: string;
    title: string;
    year: string;
    genres: string[];
    duration: string;
    info: string;
    plot: string;
    total_count: number;
};

export type Movie = {
    id: number;
    code?: string;
    imdb_id?: string;
    title: string;
    year: number;
    rating: number;
    votes: string;
    genres: string[];
    duration: string;
    bg: string;
    description?: string;
};

export const POSTER_GRADIENTS = [
    "linear-gradient(135deg, #134e4a 0%, #1e3a8a 100%)",
    "linear-gradient(135deg, #c2410c 0%, #b45309 100%)",
    "linear-gradient(135deg, #7f1d1d 0%, #1e3a8a 100%)",
    "linear-gradient(135deg, #78350f 0%, #3f3f46 100%)",
    "linear-gradient(135deg, #92400e 0%, #581c87 100%)",
    "linear-gradient(135deg, #4c1d95 0%, #9d174d 100%)",
    "linear-gradient(135deg, #0c4a6e 0%, #713f12 100%)",
    "linear-gradient(135deg, #0369a1 0%, #1e293b 100%)",
    "linear-gradient(135deg, #1e3a8a 0%, #0e7490 100%)",
    "linear-gradient(135deg, #7f1d1d 0%, #1c1917 100%)",
    "linear-gradient(135deg, #14532d 0%, #134e4a 100%)",
    "linear-gradient(135deg, #0c1445 0%, #1a0a3e 100%)",
];

export function posterUrl(imdb_id: string) {
    return `https://images.metahub.space/poster/medium/${imdb_id}/img`;
}

function parseImdbRating(info: string): { rating: number; votes: string } {
    const m = info.match(/IMDb reyting: ([\d.]+) \(([\d,]+) ovoz\)/);
    if (m) return { rating: parseFloat(m[1]), votes: m[2] };
    return { rating: 0, votes: "—" };
}

export function toMovie(m: ApiMovie): Movie {
    const { rating, votes } = parseImdbRating(m.info);
    return {
        id: m.id,
        code: m.code,
        imdb_id: m.imdb_id,
        title: m.title,
        year: parseInt(m.year),
        rating,
        votes,
        genres: m.genres,
        duration: m.duration,
        description: m.plot || undefined,
        bg: POSTER_GRADIENTS[m.id % POSTER_GRADIENTS.length],
    };
}

export const BASE = process.env.NEXT_PUBLIC_GET_API;

export async function fetchMovies(url: string): Promise<Movie[]> {
    try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const json = await res.json();
        return (json.data as ApiMovie[]).map(toMovie);
    } catch {
        return [];
    }
}
