import styles from "./Bouquet.module.css";
import { useState } from "react";
import Overview from "./Overview";

const Bouquet = ({ item, list }) => {
    const size = item[0];

    const [bouquetList, setBouquetList] = useState([]);

    const handleOnSave = (bouquet) => {
      const copy = [...bouquetList];
      copy.push(bouquet);

      setBouquetList(copy);
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

           <Overview
           list = {bouquetList} 
           size = {size}
           />
       </section>
    );
};

export default Bouquet;