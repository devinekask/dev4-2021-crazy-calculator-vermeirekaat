const Flower = ({ list, total, onColorChange, onAmountChange }) => {

  // const flowers = list[0].flowers;
  const amount = total[0];
  // console.log(list);

  const changeAmount = e => {
    // console.log(e.target.name, e.target.value);
    const amount = e.target.value;
    const flower = e.target.name;
    const values = [amount, flower]
    // console.log(flower);
    onAmountChange(values);
  }

    return (
      <form className="form__input">
      <p className="subtitle">Amount of Flowers: {amount.max}</p>
      {
        list.map((flower) => (
          <>
          <label className="label">{flower.name}
              <input onChange={changeAmount} type="number" name={flower.name} min="0" defaultValue="0"></input>   
          </label>   
           <label className="label">Color {flower.color}
            <input onChange={(e) => onColorChange(e.target.value)} type="color" defaultValue={flower.color}></input>
         </label>
         </>
        ))
        }
      </form>
              
    );
};

export default Flower;