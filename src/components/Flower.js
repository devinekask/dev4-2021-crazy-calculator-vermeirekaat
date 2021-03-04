const Flower = ({ list, total }) => {
  // console.log(list[0].flowers);
  // console.log(list);
  const flowers = list[0].flowers;
  const amount = total[0];

    return (
      <>
      <p class="subtitle">Amount of Flowers: {amount.total}</p>
      {
        flowers.map((flower) => (
          <label className="label">{flower}
            <input key={list.index} type="number" id="quantity" name="quantity" defaultValue="10"></input>
          </label>   
        ))
      }
      </>
              
    );
};

export default Flower;