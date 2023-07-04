import Image from "next/image";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <section className={styles.top}>
      <div className={styles.maxWidth}>
        <div className={styles.topContent}>
          <div className={styles.title}>
            <h1>Relojoaria Litoral</h1>
          </div>
          <div className={styles.subTitle}>
            <p>&quot;Onde o tempo ganha vida&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
