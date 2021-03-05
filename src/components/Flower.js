const Flower = ({ list, total, onChange}) => {

  const flowers = list[0].flowers;
  const amount = total[0];
  // console.log(changedAmount);

  const handleChangeValue = (e) => {
    const changed = e.target.value;
    // const flower = e.target.name;
    onChange(changed);
  }

    return (
      <>
      <p className="subtitle">Amount of Flowers: {amount.max}</p>
      {
        flowers.map((flower) => (
          <label className="label">{flower}
              <input onChange={handleChangeValue} key={flower.indexOf()} type="number" id="quantity" name={flower} min="0" defaultValue="0"></input>     
          </label>   
        ))
      }
      </>
              
    );
};

export default Flower;