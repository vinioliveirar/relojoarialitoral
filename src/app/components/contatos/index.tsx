"use client";
import {
  FacebookLogo,
  InstagramLogo,
  MapPin,
  MapPinLine,
  WhatsappLogo,
} from "@phosphor-icons/react";
import styles from "./contatos.module.scss";

export default function Contatos() {
  return (
    <section id="contatos" className={styles.section}>
      <div className={styles.maxWidth}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contato}>
              <h2>Contatos</h2>
            </div>
            <div className={styles.midiaSocial}>
              <h2>Redes Sociais</h2>
              <div className={styles.redes}>
                <a href="">
                  <InstagramLogo size={50} />
                </a>
                <a href="">
                  <FacebookLogo size={50} />
                </a>
                <a href="">
                  <WhatsappLogo size={50} />
                </a>
              </div>
            </div>

            <div className={styles.local}>
              <h2>Localização</h2>
              <div className={styles.address}>
                <MapPinLine className={styles.mapIcon} color="white" weight="bold" size={24} />
                <p>Av. ayrton senna da silva, 1511 Loja 13/14 ss/s</p>
              </div>

              <div className={styles.maps}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9527912538083!2d-46.4075187!3d-23.997444100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c53d0bceb73%3A0x5af1b7a3548a8396!2sRelojoaria%20Litoral!5e0!3m2!1spt-BR!2sbr!4v1688910278290!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
