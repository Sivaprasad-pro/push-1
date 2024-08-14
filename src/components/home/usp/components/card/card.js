'use client'
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const UspCard = ({ i, title, description, media, url, color, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.div
                style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={styles.card}
                initial={{ x: '100vw', y: '100vh' }}
                animate={{ x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >

                <div className={`${styles.body} align-items-center`}>

                    <div className={styles.description}>
                        <h1>{title}<span></span></h1>
                        <p>{description}</p>

                        <a href={url}>Read More</a>


                    </div>

                    <div className={styles.imageContainer}>
                        <motion.div
                            className={styles.inner}
                            style={{ scale: imageScale }}
                        >
                            <video
                                src={`${media.data.attributes.url}`}
                                autoPlay
                                loop
                                muted
                                playsInline={true}
                                disableRemotePlayback={true}
                                className='d-none d-sm-block' />
                            <video
                                src={`${media.data.attributes.url}`}
                                autoPlay
                                loop
                                muted
                                playsInline={true}
                                disableRemotePlayback={true}
                                className='d-block d-sm-none' />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default UspCard
