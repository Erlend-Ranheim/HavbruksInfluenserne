import React from 'react'
import styles from '../css/Hovedinnhold.module.css'
import Navbar from './Navbar.jsx'
import Video from './Video.jsx'
import Episoder from "./Episoder.jsx";
import Sesongvelger from "./Sesongvelger.jsx";




const Hovedinnhold = () => {
    return (
        <div className={styles.container}>
            <div className={styles.beskrivelse}>
                Beskrivelse
            </div>
            <div className={styles.hovedinnhold}>
                <Sesongvelger />
                <Episoder />
            </div>
        </div>
    )
}
export default Hovedinnhold
