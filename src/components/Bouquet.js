const Bouquet = ({ item, list }) => {
    const size = item[0];

    const flowers = list[0].images;
    const placeholders = list[0].placeholders;
    
    console.log(flowers);
    console.log(placeholders);

    return (
        <section className="bouquet">
        <h3 className="subtitle">Bouquet Small</h3>
           <div className={size.name}>
            {
            flowers.map((flower) => (
                // placeholders.map((placeholder) => (
                    <img src={flower} alt={flower} width={size.number} key={flowers.index}></img>
                ))    
            // ))
            }
           </div>
       </section>
    );
};

export default Bouquet;