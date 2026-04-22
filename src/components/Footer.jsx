import React from 'react'
import styles from '../css/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.editors}>
                <span>Medieredaktør nett: Erlend Næverdal Ranheim</span>
                <span className={styles.divider}>|</span>
                <span>Medieredaktør TV: Carmen Erstad</span>
                <span className={styles.divider}>|</span>
                <span>Ansvarlig redaktør: Jørgen Larsen Stavseng</span>
            </div>
            <nav className={styles.links}>
                <a href="#">NTNU.no</a>
                <span className={styles.divider}>|</span>
                <a href="#">Redaktøransvar</a>
                <span className={styles.divider}>|</span>
                <a href="#">Kontakt</a>
                <span className={styles.divider}>|</span>
                <a href="#">Om NRK</a>
                <span className={styles.divider}>|</span>
                <a href="#">Personvern</a>
                <span className={styles.divider}>|</span>
                <a href="#">Informasjonskapsler (cookies)</a>
                <span className={styles.divider}>|</span>
                <a href="#">A – Å</a>
            </nav>
            <div className={styles.copyright}>
                Opphavsrett NTNU © 2026
            </div>
        </footer>
    )
}
export default Footer