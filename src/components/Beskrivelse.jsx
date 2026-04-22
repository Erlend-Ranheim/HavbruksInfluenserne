import React from 'react'
import styles from "../css/Beskrivelse.module.css";

const Beskrivelse = () => {
    return (
        <div className={styles.container}>
            <p className={styles.beskrivelse}>
                Følg norske influensere mens de oppdager og avdekker mytene om havbruksnæringen,
                dette er hvordan det er å bo og leve langs den norske kysten
            </p>
            <div className={styles.buttons}>
                <button className={styles.iconBtn} title="Favoritt">
                    <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                </button>
                <button className={styles.iconBtn} title="Del">
                    <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 14l-4-4 4-4M5 10h11a4 4 0 0 1 0 8h-1"/>
                    </svg>
                </button>
                <button className={styles.playBtn}>
                    <svg viewBox="0 0 24 24" className="nrk-media-play" width="1.500em" height="1.500em"
                         aria-hidden="true" focusable="false">
                        <path fill="currentColor" d="M6 2h8l5.5 10L14 22H6l5.5-10L6 2z"></path>
                    </svg>
                </button>
                <div className={styles.playText}>
                    <span className={styles.playTitle}>Begynn å se <span className={styles.highlight}>sesong 1</span></span>
                        <span className={styles.playSubtitle}>1. Episode 1 <span className={styles.agelimit}>9+</span></span>
                    </div>

            </div>
        </div>
    )
}

export default Beskrivelse