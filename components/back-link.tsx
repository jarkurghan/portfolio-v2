"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function BackLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
    const router = useRouter();

    return (
        <Link
            href={href}
            className={className}
            onClick={(event) => {
                if (typeof window === "undefined") return;
                const referrer = document.referrer;
                if (!referrer) return;

                let from: URL;
                try {
                    from = new URL(referrer);
                } catch {
                    return;
                }
                if (from.origin !== window.location.origin) return;

                event.preventDefault();
                if (window.history.length > 1) {
                    router.back();
                    return;
                }
                router.push(`${from.pathname}${from.search}${from.hash}`);
            }}
        >
            {children}
        </Link>
    );
}
