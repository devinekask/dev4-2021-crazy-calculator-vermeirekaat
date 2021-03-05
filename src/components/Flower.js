const Flower = ({ list, total }) => {

  const flowers = list[0].flowers;
  const amount = total[0];

    return (
      <>
      <p className="subtitle">Amount of Flowers: {amount.max}</p>
      {
        flowers.map((flower) => (
          <label className="label">{flower}
              <input key={flower.indexOf()} type="number" id="quantity" name="quantity" min="0" defaultValue="0"></input>     
          </label>   
        ))
      }
      </>
              
    );
};

export default Flower;