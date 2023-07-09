import styles from "./sobre.module.scss";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.maxWidth}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div>
              <h2>Sobre Nós</h2>
            </div>
            <div>
              <p>
                A Relojoaria Litoral é uma empresa referência em assistência técnica e vendas de
                relógios. Há mais de 8 anos, estamos comprometidos em fornecer aos nossos clientes
                uma experiência excepcional no mundo da relojoaria.
              </p>
              <p>
                Nosso objetivo é compartilhar nossa paixão por relógios, combinando tradição,
                conhecimento e excelência em cada aspecto do nosso negócio.
              </p>
              <p>
                Temos orgulho de oferecer serviços de assistência técnica especializada. Nossa
                equipe altamente capacitada e experiente está pronta para cuidar dos seus relógios
                com precisão, habilidade e atenção aos detalhes, garantindo que eles permaneçam em
                perfeito funcionamento ao longo do tempo.
              </p>
              <p>
                Na Relojoaria Litoral, priorizamos o atendimento ao cliente e nos esforçamos para
                superar as expectativas em cada interação. Valorizamos a confiança que nossos
                clientes depositam em nós e estamos empenhados em construir relacionamentos
                duradouros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
