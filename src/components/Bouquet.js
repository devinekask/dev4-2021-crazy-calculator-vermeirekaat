import styles from "./Bouquet.module.css";

const Bouquet = ({ item, list }) => {
    const size = item[0];

    return (
        <section>
        <h3 className={styles.subtitle}>Boeket {size.name}</h3>
           <div className={styles[size.name]}>
            {
            list.map((flower) => (
                <div className={styles.overlay} style={{ backgroundColor: flower.color }}>
                    <img className={styles.image} src={flower.image} key={flower.name} alt={flower.name} width={size.number}></img>
                </div>
                ))    
            }
           </div>
       </section>
    );
};

export default Bouquet;