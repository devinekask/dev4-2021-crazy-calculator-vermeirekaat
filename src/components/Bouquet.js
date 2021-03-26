import styles from "./Bouquet.module.css";

const Bouquet = ({ item, images, onClick}) => {
    const size = item[0];

    const saveImages = (images) => {
        const newImages = [...images];
        onClick(newImages);

        images.splice(0, images.length);
    }
    return (
        <section>
        <h3 className={styles.subtitle}>Boeket {size.name}</h3>
           <div className={styles[size.name]}>
            {
            images.map((flower) => (
                <div className={styles.overlay} style={{ backgroundColor: flower.color }}>
                    <img className={styles.image} src={flower.image} key={flower.name} alt={flower.name} width={size.number}></img>
                </div>
                ))    
            }
           </div>
           <input onClick={() => saveImages(images)} className={styles.button} type="button"  value="Boeket opslaan"></input>
       </section>
    );
};

export default Bouquet;