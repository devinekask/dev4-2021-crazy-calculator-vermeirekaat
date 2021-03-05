import "./App.css";
import { useState } from "react";
import Season from "./components/Season";
import Flower from "./components/Flower";
import Color from "./components/Color";
import Buttons from "./components/Buttons";
import Bouquet from "./components/Bouquet";

import Anemone from "./assets/anemone.png";
import Baronia from "./assets/baronia.png";
import Iris from "./assets/iris.png";
import Rose from "./assets/rose.png";
import Tulip from "./assets/tulip.png";
import Lelie from "./assets/lelie.png";
import Fresia from "./assets/fresia.png";
import Zonnebloem from "./assets/zonnebloem.png";
import Chrysant from "./assets/chrysant.png";
import Lavendel from "./assets/lavendel.png";
import Dahlia from "./assets/dahlia.png";
import Gerbera from "./assets/gerbera.png";
import Aster from "./assets/aster.png";
import Statice from "./assets/statice.png";
import Jasmijn from "./assets/jasmijn.png";
import Camelia from "./assets/camelia.png";
import Kerstster from "./assets/kerstster.png";
import Tijgerlelie from "./assets/tijgerlelie.png";
import Cosmea from "./assets/cosmea.png";

const App = () => {

  const [seasons, setSeasons] = useState([
    {
      name: "Spring", 
      flowers: ["Anemone", "Iris", "Tulp", "Roos", "Baronia"],
      images: [Anemone, Iris, Tulip, Rose, Baronia,Anemone, Iris, Tulip, Rose]
    },
    {
      name: "Summer", 
      flowers: ["Lelie", "Fresia", "Zonnebloem", "Chrysant", "Lavendel"],
      images: [Lelie, Fresia, Zonnebloem, Chrysant, Lavendel,Lelie, Fresia, Zonnebloem, Chrysant, Lelie, Fresia, Zonnebloem, Chrysant, Lavendel,Lelie, Fresia]
    },
    {
      name: "Fall", 
      flowers: ["Dahlia", "Gerbera", "Aster", "Statice", "Chrysant"],
      images: [Dahlia, Gerbera, Aster, Statice, Chrysant, Dahlia, Gerbera, Aster, Statice, Dahlia, Gerbera, Aster, Statice, Chrysant, Dahlia, Gerbera, Aster, Statice, Dahlia, Gerbera, Aster, Statice, Chrysant, Dahlia, Gerbera]
    },
    {
      name: "Winter", 
      flowers: ["Jasmijn", "Camelia", "Kerstster", "Tijgerlelie", "Cosmea"],
      images: [Jasmijn, Camelia, Kerstster, Tijgerlelie, Cosmea, Jasmijn, Camelia, Kerstster, Tijgerlelie]
    }
  ]);

  const [dimensions, setDimensions] = useState([
    {
      name: "small", 
      number: 50, 
      max: 9,
      amount: []
    },
    {
      name: "medium", 
      number: 75,
      max: 16,
      amount: []
    },
    {
      name: "large",
      number: 100,
      max: 25,
      amount: []
    }
  ]);

  const [clickedDimension, setClickedDimension] = useState("small");

  const [selectedSeason, setSelectedSeason] = useState("Spring");

  const [changedAmount, setChangedAmount] = useState(["0"]); 

  const [color, setColor] = useState("#F188C9");

  const handleChangeSeason = (season) => {
    const copy = [...seasons];
    copy[seasons] = season;

    setSeasons(copy);

    setSelectedSeason(season);
  } 

  const handleChangeAmount = (value, size) => {
    const copy = [...dimensions];
    const index = copy.findIndex((check) => check.name === size);
    console.log(copy[index]);
    copy[index].amount = value;

    setDimensions(copy);

    const newAmount = calculateAmount(copy);
    
    setChangedAmount(newAmount);
  }

  const calculateAmount = array => {
    return array.reduce((total, number) => Number(total) + Number(number));
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
        list= {
          seasons.filter((season) => season.name)
          } 
        onChange= {(selectedSeason) => 
          handleChangeSeason(selectedSeason)}/>

      <Flower 
      list= { 
        seasons.filter((season) => 
          season.name === selectedSeason)
        } 
      total= { 
        dimensions.filter((dimension) => 
        dimension.name === clickedDimension)
        }
      onChange= {
        (changedAmount) => handleChangeAmount(changedAmount, clickedDimension)
        }
      />

      {/* color picker om de vier verschillende kleuren te bepalen van het boeket, op basis van de gekozen kleuren, veranderen de kleuren onderaan */}
      <Color 
        value={color} 
        onValueChange={(value) => setColor(value)}
      />
       
      </article>
      
      <article className="bouquet">

        <Buttons 
        sizes= {
          dimensions.filter((dimension) => 
            dimension.name)
          } 
        onClick= {
          (clickedDimension) => handleClickButton(clickedDimension)
          }
        />

        <Bouquet 
          list= {
            seasons.filter((season) => 
              season.name === selectedSeason)
            } 
          item= {
            dimensions.filter((dimension) => 
            dimension.name === clickedDimension)
          }
        />

      </article> 
    </section>
  </div>
    
  );
};

export default App;
