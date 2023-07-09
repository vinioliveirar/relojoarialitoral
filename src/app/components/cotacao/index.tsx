import styles from "./cotacao.module.scss";

export default function Cotacao() {
  return (
    <section className={styles.section}>
      <div className={styles.imagebg}>
        <div className={styles.maxWidth}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div>
                <h2>
                  Entre em contato para realizar sua <span>cotação</span>
                </h2>
              </div>
              <div className={styles.btn}>
                <a href="">Solicitar Cotação</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
