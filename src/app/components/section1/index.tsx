import Image from "next/image";
import styles from "./section1.module.scss";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.maxWidth}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.description}>
              <span>Nossos serviços</span>
              <h2>Assistência Técnica de Relógios</h2>
              <p>
                Compreendemos a importância do seu relógio e oferecemos uma assistência técnica
                especializada para mantê-lo em perfeito funcionamento.
              </p>
            </div>
            <div className={styles.image}>
              <img src="./section1.jpg" alt="image 1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
