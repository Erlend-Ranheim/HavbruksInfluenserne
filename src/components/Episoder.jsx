import React from 'react'
import styles from "../css/Episoder.module.css";
import Episodekort from "./Episodekort.jsx";

const Episoder = () => {

    const episoder = [
        {
            video: "/Videoprosjekt1.mp4",
            title: "1. Jobbe innen havbruk og leve på kystdistriktet",
            description: "Influenserne besøker et havbruksanlegg og snakker med arbeidere om hvordan det er å jobbe og leve i et kystdistrikt. Målet er å vise at havbruk er en spennende og variert arbeidsplass.",
            runtime: "42 min",
            agelimit: "9+"
        },
        {
            image: "/Utdanning.jpg",
            title: "2. Utdanning",
            description: "Influenserne tilbringer en dag som elever ved en akvakulturskole – de deltar i undervisning, snakker med elever og lærere, og utforsker hvilke karriereveier en havbruksutdanning kan åpne for.",
            runtime: "39 min",
            agelimit: "9+"
        },
        {
            image: "/Tare.jpg",
            title: "3. Alger, andre fiskearter, skalldyr og rensefisk",
            description: "Norsk havbruk er mer enn bare laks. Influenserne besøker produsenter av blåskjell, østers og rensefisk, og et algeoppdrettsanlegg – og avslutter med smaksprøver av produktene.",
            runtime: "45 min",
            agelimit: "9+"
        },
        {
            image: "/Fiskehelse.jpg",
            title: "4. Fiskehelse og utfordringer i havbruk",
            description: "Influenserne møter fiskehelsebiologer og veterinærer, besøker et forskningslaboratorium og får et nyansert bilde av hvordan næringen jobber med lakselus, fiskevelferd og bærekraft.",
            runtime: "45 min",
            agelimit: "9+"
        },
        {
            image: "/RasAnlegg.jpg",
            title: "5. Fremtidens havbruk",
            description: "Fra offshore merder til landbaserte anlegg – influenserne besøker SINTEF og innovative teknologibedrifter, og deler sine endelige refleksjoner etter å ha fulgt næringen gjennom hele serien.",
            runtime: "45 min",
            agelimit: "9+"
        }
    ]

    return (
        <div>

              {episoder.map((ep, index) => (
                <Episodekort
                    key={index}
                    video={ep.video}
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
