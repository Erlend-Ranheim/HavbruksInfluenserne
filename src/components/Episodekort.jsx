import React from 'react'
import styles from "../css/Episodekort.module.css";

const Episodekort = ({ image, title, description, runtime, agelimit }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={title} />
            <div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{runtime}</div>
                <div>{agelimit}</div>
            </div>
        </div>
    )
}

export default Episodekort