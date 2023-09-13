import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/components/button.module.scss';

const Button = ({ color, href, children }) => {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      router.push(href);
    }, 500);

    const button = e.currentTarget;
    button.classList.add('moved');
  };

  return (
    <a
      className={`${styles.button} ${styles[color]} ${isClicked ? styles.moved : ''}`}
      onClick={handleClick}
    >
      <div className={styles.label}>{children}</div>
    </a>
  );
};

export default Button;
