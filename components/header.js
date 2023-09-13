import Link from 'next/link';
import styles from '../styles/components/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <div className={styles.text}>
          EMRE CIMEN (©)
        </div>
      </Link>
    </header>
  );
};

export default Header;
