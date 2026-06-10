'use client'

import { useState } from 'react'

export default function Navbar() {
    const [q, setQ] = useState('')

    return (
        <nav className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-3">
                <a href="/" className="shrink-0 bg-[#f5c518] text-black font-black text-xl px-2.5 py-0.5 rounded leading-none">
                    MULTIK
                </a>

                <button className="hidden sm:flex items-center gap-1.5 text-white text-sm font-medium px-2 py-1.5 rounded hover:bg-zinc-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>Menu</span>
                </button>

                <div className="flex-1 max-w-xl flex items-center bg-white rounded overflow-hidden focus-within:ring-2 focus-within:ring-[#f5c518] transition-all">
                    <input
                        type="text"
                        placeholder="Multfilm, aktyor, janr..."
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        className="flex-1 px-3 py-1.5 text-black text-sm outline-none"
                    />
                    <button className="flex items-center justify-center w-10 min-h-8.5 bg-[#f5c518] hover:bg-[#ddb000] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-1 text-sm text-white ml-2">
                    <a href="#" className="px-3 py-1.5 rounded hover:bg-zinc-700 transition-colors whitespace-nowrap">Multfilmlar</a>
                    <a href="#" className="px-3 py-1.5 rounded hover:bg-zinc-700 transition-colors whitespace-nowrap">Seriallar</a>
                    <a href="#" className="px-3 py-1.5 rounded hover:bg-zinc-700 transition-colors whitespace-nowrap">Top Multfilmlar</a>
                    <a href="#" className="ml-1 bg-[#f5c518] text-black font-semibold text-xs px-4 py-1.5 rounded hover:bg-[#ddb000] transition-colors whitespace-nowrap">
                        Kirish
                    </a>
                </div>
            </div>
        </nav>
    )
}
