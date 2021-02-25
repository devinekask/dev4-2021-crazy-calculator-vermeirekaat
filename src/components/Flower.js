const Flower = ({ list }) => {
  // console.log(list[0].flowers);
  // console.log(list);
  const flowers = list[0].flowers;

    return (
      <>
      {
        flowers.map((flower => (
          <label className="label">{flower}
            <input key={list.index} type="number" id="quantity" name="quantity" defaultValue="10"></input>
          </label>   
        )))
      }
      </>
              
    );
};

export default Flower;