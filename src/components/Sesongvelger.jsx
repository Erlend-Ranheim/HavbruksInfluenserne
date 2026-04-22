import React from 'react'
import styles from "../css/Sesongvelger.module.css";

const Sesongvelger = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="../../public/Havbruksinfluenserne-logo.png" alt="sd"/>
            <button className={styles.button}>Sesong 1</button>
            <button className={styles.button}>Ekstramateriale</button>
        </div>
    )
}
export default Sesongvelger
