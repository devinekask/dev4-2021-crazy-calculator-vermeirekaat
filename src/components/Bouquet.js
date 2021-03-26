import styles from "./Bouquet.module.css";
import { useState } from "react";

const Bouquet = ({ item, images, onClick}) => {
    const size = item[0];

    // let name = "";
    const [name, setName] = useState("");

    const saveImages = (images) => {
        const newImages = [...images];
        const newName = name;
        const newBouquet = [newName, newImages];
        onClick(newBouquet);

        images.splice(0, images.length);
        const emptyState = "";
        setName(emptyState);
    }

    const handleChangeName = e => {
        setName(e.target.value);
    }
    return (
        <section className={styles.container}>
        <h3 className={styles.subtitle}>Boeket {size.name}</h3>
           <div className={styles[size.name]}>
            {
            images.map((flower) => (
                <div key={images.indexOf(flower)} className={styles.overlay} style={{ backgroundColor: flower.color }}>
                    <img key={`image ${images.indexOf(flower)}`} className={styles.image} src={flower.image} alt={flower.name} width={size.number}></img>
                </div>
                ))    
            }
           </div>
           <label> Geef je boeket een naam
                <input onChange={(e) => handleChangeName(e)} type="textarea" name="name" value={name}></input>
           </label>
           
           <input onClick={() => saveImages(images)} className={styles.button} type="button"  value="Boeket opslaan"></input>
       </section>
    );
};

export default Bouquet;