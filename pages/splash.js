import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/splash.module.scss';

//import bgsound from '../public/sounds/factorysound.wav';

const Splash = () => {
  const router = useRouter();
  const [fontSize, setFontSize] = useState(24);
  
  //const audio = new Audio(bgsound);

  useEffect(() => {
    const delay = setTimeout(() => {
      router.push('/');
      //audio.pause();
    }, 2000);

    // Increase font size smoothly every second
    const fontSizeInterval = setInterval(() => {
      setFontSize((prevSize) => prevSize * 1.4);
    }, 200);

    // audio.volume = 0.2;
    // audio.play();

    return () => {
      clearTimeout(delay);
      clearInterval(fontSizeInterval);
      //audio.pause();
    };
  }, [router//, audio
  ]);

  return (
    <div className={styles['splash-container']}>
      <div className={styles.text} style={{ fontSize: `${fontSize}px` }}>
        EMRE CIMEN (©)
      </div>
    </div>
  );
};

export default Splash;
