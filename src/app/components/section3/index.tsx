import styles from "./section3.module.scss";

export default function Section3() {
  return (
    <section className={styles.section}>
      <div className={styles.maxWidth}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.Relogio}>
              <img src="./relogio.png" alt="relogio" />
            </div>
            <div>
              <h2>Entre em contato para realizar sua cotação</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
