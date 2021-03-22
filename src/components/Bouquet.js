const Bouquet = ({ item, list }) => {
    const size = item[0];

    return (
        <section>
        <h3 className="subtitle">Boeket {size.name}</h3>
           <div className={size.name}>
            {
            list.map((flower) => (
                <div className="overlay"style={{backgroundColor: flower.color }}>
                    <img className="image" src={flower.image} key={flower.name} alt={flower.name} width={size.number}></img>
                </div>
                ))    
            }
           </div>
       </section>
    );
};

export default Bouquet;