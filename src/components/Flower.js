const Flower = ({ list, total, onColorChange, onAmountChange }) => {

  const amount = total[0];

  const changeAmount = (e, flower) => {
    const amount = e.target.value;
    const values = [flower, amount];
    onAmountChange(values);
  }

    return (
      <form className="form__input">
      <p className="subtitle">Amount of Flowers: {amount.max}</p>
      {
        list.map((flower) => (
          <>
          <label className="label">{flower.name}
              <input onChange={(e) => changeAmount(e, flower) } type="number" name={flower.name} min="0" defaultValue={flower.amount}></input>   
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