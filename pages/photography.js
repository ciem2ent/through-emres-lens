import { useEffect, useState } from 'react';
import Layout from '../components/layout.js';
import styles from '../styles/pages/photography.module.scss';
import Button from '../components/button.js';
import { getAllImages } from '../lib/images'; // Importiere die Funktion zum Abrufen der Bilder
import Image from 'next/image.js';

const Photography = () => {
    const [backgroundVisible, setBackgroundVisible] = useState(false);
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Führe die Funktion zum Abrufen der Bilder aus
        async function fetchImages() {
            const imageURLs = await getAllImages();
            console.log(imageURLs);
            setImages(shuffleArray(imageURLs));
            setBackgroundVisible(true);
            document.body.classList.add('photography-page');
        }

        fetchImages();
    }, []);

    const shuffleArray = (array) => {
        // Funktion zum Mischen des Arrays in zufälliger Reihenfolge
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleClick = () => {
        // Behandle den Klick auf den Bildschirm, um das nächste Bild anzuzeigen
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <Layout>
            <div className={`${styles.container} ${backgroundVisible ? styles.visible : ''}`} onClick={handleClick}>
                <div className={styles.title}>
                    <Button color='secondary-light' href=''>Photography</Button>
                </div>
                <div className={styles.content}>
                    {images.length > 0 && (
                        <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Photography;
