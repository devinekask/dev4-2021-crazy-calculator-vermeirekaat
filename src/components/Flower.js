const Flower = ({ list, total, onColorChange, onAmountChange }) => {

  const amount = total[0];

  const changeAmount = (e, flower) => {
    const amount = e.target.value;
    const values = [flower, amount];
    onAmountChange(values);

    calculateAmount();
  }

  const calculateAmount = () => {
    const numbers = [];
    list.map((item) => (
      numbers.push(item.amount)
    ));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalAmount = numbers.reduce(reducer);
    if (totalAmount >= amount.max) {
      return `You exceeded your maximum amount of flowers`;
    } else {
      return `Amount of Flowers: ${totalAmount}`;
    }
  }

    return (
      <form className="form__input">
        <p>You can choose {amount.max} flowers</p>
      <p className="subtitle">{calculateAmount()}</p>
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