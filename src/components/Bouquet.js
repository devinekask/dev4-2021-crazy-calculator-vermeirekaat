import styles from "./Bouquet.module.css";

const Bouquet = ({ item, list, onSave }) => {
    const size = item[0];

    const handleOnSave = (list, size) => {
        const values = [list, size.name];
        console.log(values);
        onSave(values);
    }

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
           <input onClick={() => handleOnSave(list, size)} className={styles.button} type="button"  value="Boeket opslaan"></input>
       </section>
    );
};

export default Bouquet;