import Layout from "../components/layout.js";
import Button from "../components/button.js";
import styles from '../styles/pages/home.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Add the class to the body when the component mounts with a slight delay
    const timeoutId = setTimeout(() => {
      setBackgroundVisible(true);
      document.body.classList.remove('photography-page'); // Remove the photography class
    }, 200);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove('photography-page');
    };
  }, []);

  return (
    <Layout>
      <div className={`${styles.navbar} ${backgroundVisible ? styles.visible : ''}`}>
        <Button color='primary-light' href='/about'>About</Button>
        <Button color='secondary-light' href='/photography'>Photography</Button>
        <Button color='purple' href='/music'>Music</Button>
        <Button color='red' href='/desi'>Design</Button>
      </div>
    </Layout>
  );
};

export default Home;
