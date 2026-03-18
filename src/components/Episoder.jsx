import React from 'react'
import styles from "../css/Episoder.module.css";
import Episodekort from "./Episodekort.jsx";


const Episoder = () => {

    const episoder = [
        {
            image: "../../public/eksempelbilde1.jpg",
            title: "Episode 1",
            description: "The adventure begins",
            runtime: "42 min",
            agelimit: "13+"
        },
        {
            image: "../../public/eksempelbilde2.jpg",
            title: "Episode 2",
            description: "Things get worse",
            runtime: "45 min",
            agelimit: "13+"
        }
    ]

    return (
        <div>
            {episoder.map((ep, index) => (
                <Episodekort
                    key={index}
                    image={ep.image}
                    title={ep.title}
                    description={ep.description}
                    runtime={ep.runtime}
                    agelimit={ep.agelimit}
                />
            ))}
        </div>
    )
}
export default Episoder
