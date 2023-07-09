/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./servicos.module.scss";

export default function Servicos() {
  return (
    <section id="servico" className={styles.section}>
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

      <section>
        <div className={styles.maxWidth}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.image2}>
                <img src="./section2.jpg" alt="image 1" />
              </div>
              <div className={styles.description}>
                <span>Vendas de Relógios</span>
                <h2>Seu novo relógio está aqui</h2>
                <p>
                  Encontre o relógio perfeito que reflete o seu estilo e eleva a sua experiência com
                  o tempo. Oferecemos uma seleção cuidadosamente escolhida dos mais elegantes e
                  sofisticados relógios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
