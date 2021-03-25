import styles from "./Overview.module.css";

const Overview = ({ list, size }) => {
    console.log(list);
    
    if(list.length <= 0) {
        return (
            <div>
                <h2 className={styles.subtitle}>Mijn Boeketten</h2>
                <p>Je hebt nog geen boeketten opgeslagen.</p>
            </div>         
        )
    }
    if (list.length === 1) {  
        const flowers = list[0];
        return (
            <>
                 <h2 className={styles.subtitle}>Mijn Boeketten</h2>
            <div className={styles[size.name]}>
               
               {
               flowers.map((flower) => (
                   <div className={styles.overlay} style={{backgroundColor: flower.color}}>
                       <img className={styles.image} src={flower.image} key={flower.name} alt={flower.name} width={size.number}></img>
                   </div>
                   ))
               }
           </div>
            </>
           
        )
    }
    if (list.length >= 2 ) {
        return (
            <>
            <h2 className={styles.subtitle}>Mijn Boeketten</h2>
                 {list.map((flowers) => (
                    <div className={styles[size.name]}>
                    {flowers.map((flower) => (
                        <div className={styles.overlay} style={{backgroundColor: flower.color}}>
                            <img className={styles.image} src={flower.image} key={flower.name} alt={flower.name} width={size.number}></img>
                        </div>
                        ))}
                    </div>
                ))}
            </>    
        )
    }

    return <h2 className={styles.subtitle}>Mijn Boeketten</h2>
    
}

export default Overview;