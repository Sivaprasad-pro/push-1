// cursor/GradientCursor.js
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Styles from './style.module.css';


export default function GradientCursor({ isActive }) {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);
    const circles = useRef([]);
    const bgRef = useRef(null);

    const size = isActive ? 20 : 30;
    const delay = isActive ? 0.015 : 0.005;

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        };
    };

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        };

        moveCircles(delayedMouse.current.x, delayedMouse.current.y);

        // Move the glassmorphism background
        gsap.set(bgRef.current, { x: delayedMouse.current.x, y: delayedMouse.current.y, xPercent: -50, yPercent: -50 });

        rafId.current = window.requestAnimationFrame(animate);
    };

    const moveCircles = (x, y) => {
        if (circles.current.length < 1) return;
        circles.current.forEach((circle, i) => {
            gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
        });
    };

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current);
        };
    }, [isActive]);

    return (
        <div >
            <div className={`${Styles['custom_cursor']}`}
                ref={bgRef}
                style={{
                    // width: size * 1.5,
                    // height: size * 1.5,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    // backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light semi-transparent white
                    // backdropFilter: 'blur(105px)', // Blur effect for glassmorphism
                    // zIndex: 9999, 
                    pointerEvents: 'none',
                    transition: 'width 0.3s ease-out, height 0.3s ease-out'
                }}
            />

        </div>
    );
}
