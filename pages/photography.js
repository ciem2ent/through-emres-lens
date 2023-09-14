import { useEffect, useState } from 'react';
import Layout from '../components/layout.js';
import styles from '../styles/pages/photography.module.scss';
import Button from '../components/button.js';
import { getAllImages } from '../lib/images';
import Image from 'next/image.js';

const Photography = () => {
    const [backgroundVisible, setBackgroundVisible] = useState(false);
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        async function fetchImages() {
            const imageURLs = await getAllImages();
            setImages(shuffleArray(imageURLs));
            setBackgroundVisible(true);
        }
        document.body.classList.add('photography-page');
        fetchImages();
    }, []);

    const shuffleArray = (array) => {
        // Function to shuffle the array in random order
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleClick = () => {
        // Show the next image and change its position randomly
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        const imageElement = document.querySelector('.image-container img');

        if (imageElement) {
            // Check if the image element exists
            imageElement.onload = () => {
                // Wait for the image to load
                imageElement.style.left = `${randomX}px`;
                imageElement.style.top = `${randomY}px`;
            };
        }
    };

    return (
        <Layout>
            <div className={`${styles.container} ${backgroundVisible ? styles.visible : ''}`} onClick={handleClick}>
                <div className={styles.title}>
                    <Button color='secondary-light' href=''>Photography</Button>
                </div>
                <div className={`${styles.content} image-container`}>
                    {images.length > 0 && (
                        <div style={{ position: 'relative' }}>
                            <Image
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex}`}
                                width={600} // Adjust the desired width
                                height={338} // 16:9 aspect ratio (400 / 16 * 9)
                                layout="responsive"
                            />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Photography;
