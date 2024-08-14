"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Header from "./Header";
import GradientCursor from "../cursor/GradientCursor";
import Footer from "./footer";
import { AnimatePresence } from "framer-motion";
import Preloader from "../Preloader";

const inter = Inter({ subsets: ["latin"] });

const ClientSideRouter = ({ children }) => {
    const [cursorActive, setCursorActive] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadLocomotiveScroll = async () => {
            try {
                const LocomotiveScroll = (await import("locomotive-scroll")).default;
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = "default";
                    window.scrollTo(0, 0);
                }, 2000);
            } catch (error) {
                console.error("Failed to load LocomotiveScroll", error);
            }
        };

        loadLocomotiveScroll();
    }, []);

    return (
        <div className={inter.className}>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            {!isLoading && (
                <>
                    <Header />
                    <GradientCursor isActive={cursorActive} />
                    {children}
                    <Footer />
                </>
            )}
        </div>
    );
};

export default ClientSideRouter;
