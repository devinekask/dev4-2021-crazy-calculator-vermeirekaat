import styles from "./Overview.module.css";

const Overview = ({ list }) => {

    // console.log(list);
    const newList = [...list];

    if(newList.length <= 0) {
        return (
            <div>
                <h2 className={styles.subtitle}>Mijn Boeketten</h2>
                <p className={styles.info}>Je hebt nog geen boeketten opgeslagen.</p>
            </div>         
        )
    }
    if (newList.length === 1) {  
        const flowers = newList[0];
        return (
            <>
            <h2 className={styles.subtitle}>Mijn Boeketten</h2>
            <div className={styles.klein}>
               {
               flowers.map((flower) => (
                   <div className={styles.overlay} style={{backgroundColor: flower.color}}>
                       <img className={styles.image} src={flower.image} key={flower.name} alt={flower.name} width="50"></img>
                   </div>
                   ))
               }
           </div>
            </>
           
        )
    }
    if (newList.length >= 2 ) {
        return (
            <>
            <h2 className={styles.subtitle}>Mijn Boeketten</h2>
                <div className={styles.overview}>

                 {newList.map((flowers) => (
                    <div className={styles.klein}>        
                    {flowers.map((flower) => (
                        <div className={styles.overlay} style={{backgroundColor: flower.color}}>
                            <img className={styles.image} src={flower.image} key={flower.name} alt={flower.name} width="50"></img>
                        </div>
                        ))}
                    </div>
                ))}
            </div>   
            </> 
        )
    }

    return <h2 className={styles.subtitle}>Mijn Boeketten</h2>
    
}

export default Overview;