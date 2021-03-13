const Bouquet = ({ item, list }) => {
    const size = item[0];
    console.log(list);

    return (
        <section className={size.class}>
        <h3 className="subtitle">Bouquet {size.name}</h3>
           <div className={size.name}>
            {
            list.map((flower) => (
                    <img src={flower} key={flower.name} alt={flower.name} width={size.number}></img>
                ))    
            }
           </div>
       </section>
    );
};

export default Bouquet;