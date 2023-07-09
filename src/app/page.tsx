import styles from "./page.module.css";
import Banner from "./components/banner";
import Servicos from "./components/servicos";
import Cotacao from "./components/cotacao";
import Sobre from "./components/sobre";
import Contatos from "./components/contatos";
import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Servicos />
        <Cotacao />
        <Sobre />
        <Contatos />
      </main>
    </>
  );
}
