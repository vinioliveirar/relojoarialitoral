import styles from "./page.module.css";
import Banner from "./components/banner";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import { Header } from "./components/header";
import Section3 from "./components/section3";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
}
