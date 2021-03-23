import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <article className={styles.poem}>
            <h2 className={styles.title}>BloemGedicht</h2>
            <div className={styles.part}>
                <p>Ik noem je: <span>bloemen</span> </p>
                <p>Ik noem je: merel in de vroegte</p>
                <p>Ik noem je: <span>mooi</span> </p>
            </div>
            <div className={styles.part}>
                <p>Ik noem je: <span>narcissen</span> in de nacht</p>
                <p>waarover de wind strijkt</p>
                <p>naar <span>mij</span> toe</p>
            </div>
            <div className={styles.part}>
                <p>ik noem je: <span>bloemen in de nacht</span></p>
            </div>
            <div className={styles.writer}>
                <p>Jan Hanlo (1912-1969)</p>
            </div>
        </article>
    )
};

export default About;