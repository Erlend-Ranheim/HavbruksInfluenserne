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
                <source src="../../public/.mp4" type="video/mp4" />

            </video>
        </div>
    )
}

export default Video
