'use client';
import styles from './style.module.scss';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import UspCard from './components/card/card';

export default function Usp({ contents }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0,
            easing: (t) => Math.min(1, 1.5 - Math.pow(1.2 - t, 1.5)),
            smoothWheel: true,
            smoothTouch: true, // Ensure smooth scrolling on touch devices
            touchMultiplier: 0 // Adjust the sensitivity for touch scrolling if needed
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <main ref={container} className={styles.main}>
            {contents.map((content, i) => {
                const targetScale = 1 - ((contents.length - i) * 0.05);
                const opacity = scrollYProgress.get() < (i * 0.25) ? 0 : 1;
                return (
                    <UspCard
                        key={`p_${i}`}
                        i={i}
                        {...content}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                        initialOpacity={0}
                        targetOpacity={opacity}
                    />
                );
            })}
        </main>
    );
}
