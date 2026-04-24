import React from 'react'
import styles from '../css/Video.module.css'

const Video = () => {
    return (
        <div>
            <video className={styles.video}
                    autoPlay
                    loop
                    muted
                    playsInline>
                <source src="/Havbruksinfluencerne1.mp4" type="video/mp4" />

            </video>
            <img className={styles.logo} src="../../public/Havbruksinfluenserne-logo.png" alt=""/>
        </div>
    )
}

export default Video
