"use client";

declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                initDataUnsafe: { user?: { id?: number } };
                close: () => void;
                expand: () => void;
            };
        };
    }
}

const SEND_API = process.env.NEXT_PUBLIC_SEND_API ?? "";

export default function KorishButton({ code, className }: { code?: string; className?: string }) {
    async function handleClick() {
        if (!code) return;
        const chatId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
        if (!chatId) return;
        await fetch(`${SEND_API}/${code}/${chatId}`).catch(() => {});
        window.Telegram?.WebApp?.close();
    }

    return (
        <button onClick={handleClick} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
            Ko'rish
        </button>
    );
}
