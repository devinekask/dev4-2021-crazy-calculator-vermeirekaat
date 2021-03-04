const Bouquet = ({ item, list }) => {
    const size = item[0];

    const flowers = list[0].images;

    return (
        <section className="bouquet">
        <h3 className="subtitle">Bouquet {size.name}</h3>
           <div className={size.name}>
            {
            flowers.map((flower) => (
                    <img  src={flower} alt={flower} width={size.number}></img>
                ))    
            }
           </div>
       </section>
    );
};

export default Bouquet;