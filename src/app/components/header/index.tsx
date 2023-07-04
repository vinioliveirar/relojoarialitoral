import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../assets/logoPNG.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.maxWidth}>
        <nav className={styles.Nav}>
          <ul className={styles.navList}>
            <li>
              <a href="">Início</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Solicite Cotação</a>
            </li>
            <li>
              <a href="">Contatos</a>
            </li>
          </ul>

          <div className={styles.logo}>
            <Image alt="logo" src={logo} width={64} height={80} />
          </div>
        </nav>
      </div>
    </header>
  );
}
