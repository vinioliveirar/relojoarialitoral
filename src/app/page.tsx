import Banner from "./components/banner";
import Header from "./components/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
      </main>
    </>
  );
}
