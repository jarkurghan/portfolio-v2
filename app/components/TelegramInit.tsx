"use client";
import { useEffect } from "react";

export default function TelegramInit() {
    useEffect(() => {
        window.Telegram?.WebApp?.expand();
    }, []);
    return null;
}
