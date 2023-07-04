import styles from "./header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.maxWidth}>
        <nav className={styles.Nav}>
          <ul className={styles.navList}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Entre em Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
