import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="" />
            </a>
          </Link>
        </div>
        <div className={styles.headerEnd}>
          <Link href="/cart">
            <a>
              <Image src="/shopping-cart.svg" alt="" objectFit="cover" width="20" height="20" />
              Liste d’achats
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
