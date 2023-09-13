import { useEffect, useState } from 'react';
import Layout from '../components/layout.js';
import styles from '../styles/pages/photography.module.scss';
import Button from '../components/button.js';

const Photography = () => {
    const [backgroundVisible, setBackgroundVisible] = useState(false);

    useEffect(() => {
        // Add the class to the body when the component mounts with a slight delay
        const timeoutId = setTimeout(() => {
            setBackgroundVisible(true);
            document.body.classList.add('photography-page');
        }, 200);

        // Clear the timeout when the component unmounts
        return () => {
            clearTimeout(timeoutId);
            document.body.classList.remove('photography-page');
        };
    }, []);

    return (
        <Layout>
            <div className={`${styles.container} ${backgroundVisible ? styles.visible : ''}`}>
                <div className={styles.title}>
                    <Button color='secondary-light' href=''>Photography</Button>
                </div>
            </div>
        </Layout>
    );
}

export default Photography;
