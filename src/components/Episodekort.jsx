import React from 'react'
import styles from "../css/Episodekort.module.css";

const Episodekort = ({ image, video, title, description, runtime, agelimit }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                {video ? (
                    <video
                        className={styles.video}
                        src={video}
                        muted
                        loop
                        playsInline
                        onMouseEnter={e => e.target.play()}
                        onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
                    />
                ) : (
                    <img className={styles.image} src={image} alt={title} />
                )}
            </div>
            <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div>{description}</div>
                <div className={styles.meta}>
                    <span>{runtime}</span>
                    <span className={styles.agelimit}>{agelimit}</span>
                </div>
            </div>
        </div>
    )
}

export default Episodekort