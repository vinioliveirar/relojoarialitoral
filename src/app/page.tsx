import Banner from "./components/banner";
import { Header } from "./components/header";
import Section1 from "./components/section1";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Section1 />
      </main>
    </>
  );
}
