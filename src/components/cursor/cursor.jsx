'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import Styles from './style.module.css';

export default function BlurryCursor() {
    const mouse = useRef({ x: 0, y: 0 });
    const circle = useRef();
    const size = 30;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        }

        moveCircle(mouse.current.x, mouse.current.y);
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [])

    return (
        <div className=''>
            <div ref={circle} className={`${Styles['custom_cursor']}`} />
        </div>
    )
}
// backgroundColor: "red" , width: size, height: size, 