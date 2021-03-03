import "./App.css";
import { useState } from "react";
import Season from "./components/Season";
import Flower from "./components/Flower";
import Color from "./components/Color";
import Buttons from "./components/Buttons";
import Bouquet from "./components/Bouquet";

const App = () => {

  const [seasons, setSeasons] = useState([
    {
      name: "Spring", 
      flowers: ["Anemone", "Iris", "Tulp", "Roos", "Baronia"]
    },
    {
      name: "Summer", 
      flowers: ["Lelie", "Fresia", "Zonnebloem", "Chrysant", "Lavendel"]
    },
    {
      name: "Fall", 
      flowers: ["Dahlia", "Gerbera", "Aster", "Statice", "Chrysant"]
    },
    {
      name: "Winter", 
      flowers: ["Jasmijn", "Camelia", "Kerstster", "Tijgerlelie", "Cosmea"]
    }
  ]);

  const [dimensions, setDimensions] = useState([
    {
      name: "small", 
      number: 50
    },
    {
      name: "medium", 
      number: 150
    },
    {
      name: "large",
      number: 250
    }
  ]);

  const [clickedDimension, setClickedDimension] = useState("small");

  const [selectedSeason, setSelectedSeason] = useState("Spring");
  const [color, setColor] = useState("#F188C9");

  const handleChangeSeason = (season) => {
    const copy = [...seasons];
    copy[seasons] = season;
    // console.log(season);

    setSeasons(copy);

    setSelectedSeason(season);
  } 

  const handleClickButton = (button) => {
    const copy = [...dimensions];
    copy[dimensions] = button;
    // console.log(button);

    setDimensions(copy);
    
    setClickedDimension(button);
  }

  return (
    <div>
      <p className="hidden">Crazy Calculator</p>
      <section className="header">
        <h2 className="title">Flower Arrangement</h2>
        <p className="slogan">Your personal bouquet, perfect for every occasion</p>
      </section>

  <section className="content">
      <article className="form">
        <Season 
        list={seasons.filter((season) => season.name)} 
        onChange={(selectedSeason) => 
          handleChangeSeason(selectedSeason)}/>

      {/* via compontent checken welke bloemen er geselecteerd zijn in bovenstaande selectievenster */}

      <Flower 
      list={seasons.filter((season) => season.name === selectedSeason)}/>

      {/* color picker om de vier verschillende kleuren te bepalen van het boeket, op basis van de gekozen kleuren, veranderen de kleuren onderaan */}
      <Color value={color} onValueChange={(value) => setColor(value)}/>
       
      </article>
      
      <article className="bouquet">

        <Buttons sizes={dimensions.filter((dimension) => dimension.name)} onClick={(clickedDimension) => handleClickButton(clickedDimension)}/>

        <Bouquet list={seasons.filter((season) => season.name === selectedSeason)} item={dimensions.filter((dimension) => dimension.name === clickedDimension)}/>

      </article> 
    </section>
  </div>
    
  );
};

export default App;
