import "./App.css";
import Season from "./components/Season";
import Flower from "./components/Flower";
import Color from "./components/Color";
import { useState } from "react";

const App = () => {

  const [seasons, setSeasons] = useState([
    {
      name: "spring", 
      flowers: ["boronia", "iris", "tulp", "roos", "boronia"]
    },
    {
      name: "summer", 
      flowers: ["lelie", "fresia", "zonnebloem", "chrysant", "lavendel"]
    },
    {
      name: "fall", 
      flowers: ["dahlia", "gerbera", "aster", "statice", "chrysant"]
    },
    {
      name: "winter", 
      flowers: ["jasmijn", "camelia", "kerstster", "tijgerlelies", "cosmea"]
    }
  ]);

  const [selectedSeason, setSelectedSeason] = useState("spring");
  const [color, setColor] = useState("#F188C9");

  const handleChangeSeason = (season) => {
    const copy = [...seasons];
    copy[seasons] = season;
    console.log(season);

    setSeasons(copy);

    setSelectedSeason(season);
  } 

  return (
    <div>
      <p className="hidden">Crazy Calculator</p>
      <section className="header">
        <h2 className="title">Flower Arrangement</h2>
        <p className="slogan">Your personal bouquet, perfect for every occasion</p>
      </section>

      <section className="form">
        <Season 
        list={seasons.filter((season) => season.name)} 
        onChange={(selectedSeason) => 
          handleChangeSeason(selectedSeason)}/>

      {/* via compontent checken welke bloemen er geselecteerd zijn in bovenstaande selectievenster */}

      <Flower 
      list={seasons.filter((season) => season.name === selectedSeason)}/>

      {/* color picker om de vier verschillende kleuren te bepalen van het boeket, op basis van de gekozen kleuren, veranderen de kleuren onderaan */}
      <Color value={color} onValueChange={(value) => setColor(value)}/>
       
      </section>
      
      <section className="bouquet">
        <h2 className="hidden">Bouquet Example</h2>
          <article className="bouquet--small">
            <h3 className="subtitle">Bouquet Small</h3>
            <div style={{ borderColor: `${color}`}} className="placeholder placeholder--small"></div>
          </article>
          <article className="bouquet--medium">
            <h3 className="subtitle">Bouquet Medium</h3>
            <div style={{ borderColor: `${color}`}} className="placeholder placeholder--medium"></div>
          </article>
          <article className="bouquet--large">
            <h3 className="subtitle">Bouquet Large</h3>
            <div style={{ borderColor: `${color}`}} className="placeholder placeholder--large"></div>
          </article>
      </section>
    </div>
    
  );
};

export default App;
