'use client';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import Rounded from '@/common/RoundedButton';
import Project from './components/project';
import axios from 'axios';

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [projects, setProjects] = useState([]); // Initialize as empty array
  const [isLoading, setIsLoading] = useState(true);

  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    // Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const fetchData = async () => {
      try {
        const params = {
          sort: 'rank:asc',
          'pagination[limit]': 4,
        };
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/industries`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
          params: params,
        });
        const data = response.data.data;
        setProjects(data); // Updated state variable
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch projects", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this will run once when the component mounts

  const moveItems = (x, y) => {
    if (xMoveContainer.current && yMoveContainer.current) {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
    }
    if (xMoveCursor.current && yMoveCursor.current) {
      xMoveCursor.current(x);
      yMoveCursor.current(y);
    }
    if (xMoveCursorLabel.current && yMoveCursorLabel.current) {
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
    }
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main onMouseMove={(e) => moveItems(e.clientX, e.clientY)} className={styles.projects}>
      <div className='container'>
        <h5 className={`${styles['title']}`}>Industries We Serve</h5>

        <div className={styles.body}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            projects.map((project, index) => (
              <Project
                key={index}
                index={index}
                title={project.attributes.industry_name}
                description={project.attributes.small_description}
                manageModal={manageModal}
              />
            ))
          )}
        </div>

        <Link href="#" className='d-inline-block d-sm-flex justify-content-center text-decoration-none text-dark w-auto'>
          <Rounded>
            <p className='m-0'>View All</p>
          </Rounded>
        </Link>

        <>
          <motion.div
            ref={cursor}
            className={styles.cursor}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          />
          <motion.div
            ref={cursorLabel}
            className={styles.cursorLabel}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            View
          </motion.div>
        </>
      </div>
    </main>
  );
}
