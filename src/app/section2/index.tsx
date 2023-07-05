import styles from "./section2.module.scss";

export default function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.maxWidth}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.image}>
              <img src="./section2.jpg" alt="image 1" />
            </div>
            <div className={styles.description}>
              <span>Vendas de Relógios</span>
              <h2>Descubra a arte do tempo</h2>
              <p>
                Encontre o relógio perfeito que reflete o seu estilo e eleva a sua experiência com o
                tempo. Oferecemos uma seleção cuidadosamente escolhida dos mais elegantes e
                sofisticados relógios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
