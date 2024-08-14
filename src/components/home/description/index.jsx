import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from './animation';
export default function Description({ contents }) {

    const description = useRef(null);
    const isInView = useInView(description)
    return (

        <div ref={description} className={styles.description}>
            <div className='container'>
                <div className={styles.body}>
                    <p>
                        {
                            contents.title.split(" ").map((word, index) => {
                                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                            })
                        }
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                        {contents.description}
                    </motion.p>

                </div>
            </div>

        </div>
    )
}
