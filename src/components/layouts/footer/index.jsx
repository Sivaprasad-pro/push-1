import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
// import Magnetic from '@/common/Magnetic';
import dynamic from 'next/dynamic';
import Rounded from '@/common/RoundedButton';
const Magnetic = dynamic(() => import('@/common/Magnetic'), { ssr: false });
const Footer = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (


        <motion.div style={{ y }} ref={container} className={styles.contact}>

            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt="Footer Icon"
                                src="/graphics/footer_icon.svg"
                            />
                        </div>
                        <h2>Let&apos;s work</h2>
                    </span>
                    <h2>together</h2>
                    <div className={`${styles['subscribe']} d-flex mt-3`}>
                        <input type='email' placeholder='Your email address' className='border-0 rounded-pill p-3 w-100' />
                        <Rounded>
                            <p className='m-0 text-decoration-none'>Subscribe to newsletter</p>
                        </Rounded>
                    </div>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor="#100000" className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg
                        style={{ rotate, scale: 2 }}
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                            fill="white"
                        />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p className='m-0'>hello@konceptslab.com</p>
                    </Rounded>
                    <Rounded>
                        <p className='m-0 text-decoration-none'>+91 963311 6499</p>
                    </Rounded>

                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            {/* <h3>socials</h3> */}
                            <Magnetic>
                                <p>Facebook</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Youtube</p>
                        </Magnetic>
                        <Magnetic>
                            <p>LinkedIn</p>
                        </Magnetic>
                    </div>
                    <div>
                        <span>
                            {/* <h3>Links</h3> */}
                            <Magnetic>
                                <p>Careers</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Industries</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Digital</p>
                        </Magnetic>
                        <Magnetic>
                            <p>AI</p>
                        </Magnetic>
                        <Magnetic>
                            <p>CX</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Cookies Policy</p>
                        </Magnetic>
                        <Magnetic>
                            <p> Privacy Policy</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
