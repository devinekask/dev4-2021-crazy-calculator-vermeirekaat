const Flower = ({ list }) => {
  console.log(list[0].flower);

    return (
      <label className="label">{list[0].flower}
          <input type="number" id="quantity" name="quantity" defaultValue="10"></input>
      </label>           
    );
};

export default Flower;