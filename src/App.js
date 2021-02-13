import "./App.css";

const App = () => {
  return (
    <div>
      <p className="hidden">Crazy Calculator</p>
      <section className="header">
        <h2 className="title">Flower Arrangement</h2>
        <p className="subtitle">Your personal bouquet of flowers, for every occasion</p>
      </section>

      <section className="form">
        <h2 className="hidden">Flower Form</h2>
        <label htmlFor="season">Choose a season</label>
          <select name="seasons" id="select-season">
              <option value="">--Please select the season--</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
          </select>

      {/* via compontent checken welke bloemen er geselecteerd zijn in bovenstaande selectievenster */}
      <label>Flower #1
        <input type="number" id="quantity" name="quantity" defaultValue="10"></input>
      </label>

      {/* color picker om de vier verschillende kleuren te bepalen van het boeket, op basis van de gekozen kleuren, veranderen de kleuren onderaan */}
        <label>Color #1
          <input type="color" defaultValue="#F188C9"></input>
        </label>
      </section>
      
    </div>
    
  );
};

export default App;
