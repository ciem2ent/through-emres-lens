import Layout from '../components/layout';
import styles from '../styles/pages/about.module.scss';
import Button from '../components/button';
import { useEffect } from 'react';
import Image from 'next/image';


const About = () => {

    useEffect(() => {
        document.body.classList.add('about-page');

        return () => {
            document.body.classList.remove('about-page');
        };
    }, []);


    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Button color='primary-light' href=''>About</Button>
                </div>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <Image 
                            alt='Portrait of Emre Cimen, shot by Peeps'
                            //src='/images/about/me.png'
                            src='/images/about/000010880016.jpg'
                            width={6774}
                            height={4492}
                        />
                    </div>
                    <div className={styles.text}>
                        <div>
                            EMRE CIMEN (©) is a software developer based in Solothurn
                        </div>
                            
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;