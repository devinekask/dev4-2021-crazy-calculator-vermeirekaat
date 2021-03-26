import styles from "./Overview.module.css";

const Overview = ({ list }) => {
    
    if(list.length <= 0) {
        return (
            <div>
                <h2 className={styles.subtitle}>Mijn Boeketten ({list.length})</h2>
                <p className={styles.info}>Je hebt nog geen boeketten opgeslagen.</p>
            </div>         
        )
    }
    if (list.length === 1) {  
        const flowers = list[0].bouquet;
        const name = list[0].name;
        return (
            <>
            <h2 className={styles.subtitle}>Mijn Boeketten ({list.length})</h2>
            <div className={styles.part}>
                <p className={styles.first}>{name}</p>
            <div className={styles.klein}>
               {
               flowers.map((flower) => (
                   <div key={`div ${flowers.indexOf(flower)}`} className={styles.overlay} style={{backgroundColor: flower.color}}>
                       <img key={flowers.indexOf(flower)} className={styles.image} src={flower.image} alt={flower.name} width="50"></img>
                   </div>
                   ))
               }
           </div>
           </div>
            </>
           
        )
    }
    if (list.length >= 2 ) {
        return (
            <>
            <h2 className={styles.subtitle}>Mijn Boeketten ({list.length})</h2>
                <div className={styles.overview}>

                 {list.map((item) => (
                <div className={styles.part}>
                        <p className={styles.name} key={`p ${list.indexOf(item.name)}`}>{item.name}</p> 
                    <div key={`div ${list.indexOf(item.name)}`} className={styles.klein}>     
                    {item.bouquet.map((flower) => (
                        <div key={item.bouquet.indexOf(flower)} className={styles.overlay} style={{backgroundColor: flower.color}}>
                            <img key={`div ${item.bouquet.indexOf(flower)}`}className={styles.image} src={flower.image} alt={flower.name} width="50"></img>
                        </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>   
            </> 
        )
    }

    return <h2 className={styles.subtitle}>Mijn Boeketten</h2>
    
}

export default Overview;