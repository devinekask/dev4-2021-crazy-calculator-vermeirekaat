import styles from "./Flower.module.css";
import "../style/input.module.css";

const Flower = ({ list, total, onColorChange, onAmountChange }) => {

  const amount = total[0];

  let totalAmount;

  const calculateAmount = () => {
    const numbers = [];
    list.map((item) => (
      numbers.push(item.amount)
    ));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    totalAmount = numbers.reduce(reducer);
    if (totalAmount >= amount.max) {
      return `Je hebt het maximum aantal bloemen behaald (${totalAmount})`;
    } else {
      return `Hoeveelheid bloemen: ${totalAmount}`;
    }
  }

  const changeAmount = (e, flower) => {
    const amount = e.target.value;
    const values = [flower, amount, totalAmount, amount.max];
    onAmountChange(values);

    calculateAmount();
  }

  const changeColor = (e, flower) => {
    const color = e.target.value;
    const values = [flower, color];
    onColorChange(values);
  }

    return (
      <form>
        <p>Je kan {amount.max} bloemen kiezen.</p>
      <p className={styles.subtitle}>{calculateAmount()}</p>
      {
        list.map((flower) => (
          <>
          <label key={flower.name} className={styles.label}>{flower.name}
              <input key={`input ${flower.name}`} onChange={(e) => changeAmount(e, flower, amount.max)} type="number" name={flower.name} min="0" defaultValue={flower.amount}></input>   
          </label>   
           <label key={flower.id} className={styles.label}>Kleur {flower.color}
            <input key={`input ${flower.id}`} onChange={(e) => changeColor(e, flower)} type="color" defaultValue={flower.color}></input>
         </label>
         </>
        ))
      }
      </form>
              
    );
};

export default Flower;