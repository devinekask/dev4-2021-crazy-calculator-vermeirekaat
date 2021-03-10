import "./App.css";
import { useState } from "react";
import Season from "./components/Season";
import Flower from "./components/Flower";
// import Color from "./components/Color";
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
      name: "spring", 
      flowers: ["Anemone", "Iris", "Tulp", "Roos", "Baronia"],
      images: [Anemone, Iris, Tulip, Rose, Baronia,Anemone, Iris, Tulip, Rose], 
    },
    {
      name: "summer", 
      flowers: ["Lelie", "Fresia", "Zonnebloem", "Chrysant", "Lavendel"],
      images: [Lelie, Fresia, Zonnebloem, Chrysant, Lavendel,Lelie, Fresia, Zonnebloem, Chrysant, Lelie, Fresia, Zonnebloem, Chrysant, Lavendel,Lelie, Fresia]
    },
    {
      name: "fall", 
      flowers: ["Dahlia", "Gerbera", "Aster", "Statice", "Chrysant"],
      images: [Dahlia, Gerbera, Aster, Statice, Chrysant, Dahlia, Gerbera, Aster, Statice, Dahlia, Gerbera, Aster, Statice, Chrysant, Dahlia, Gerbera, Aster, Statice, Dahlia, Gerbera, Aster, Statice, Chrysant, Dahlia, Gerbera]
    },
    {
      name: "winter", 
      flowers: ["Jasmijn", "Camelia", "Kerstster", "Tijgerlelie", "Cosmea"],
      images: [Jasmijn, Camelia, Kerstster, Tijgerlelie, Cosmea, Jasmijn, Camelia, Kerstster, Tijgerlelie]
    }
  ]);

  const [spring, setSpring] = useState([
    {
      name: "Anemone", 
      image: Anemone, 
      color: "#FAA3FF", 
      amount: 0
    },
    {
      name: "Iris", 
      image: Iris, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Tulp", 
      image: Tulip, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Rose", 
      image: Rose, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Baronia", 
      image: Baronia, 
      color: "#FAA3FF", 
      amount: 2
    },
  ])

  const [dimensions, setDimensions] = useState([
    {
      name: "small", 
      number: 50, 
      max: 9,
    },
    {
      name: "medium", 
      number: 75,
      max: 16,
    },
    {
      name: "large",
      number: 100,
      max: 25,
    }
  ]);

  const [clickedDimension, setClickedDimension] = useState("small");

  const [selectedSeason, setSelectedSeason] = useState("spring");

  const changeColor = (color) => {
    console.log(color);
  }

  const handleChangeAmount = (values) => {
    // console.log(`amount: ${values[0]}`);
    // console.log(`flower: ${values[1]}`);
    // const flower = values[1];
    // let changedAmount = values[0];
    const items = values[0];
    const changedAmount = values[1]; 
    const copy = [...spring]; 
    const index = copy.findIndex((check) => check.name === items.name); 
    copy[index] = {...items, amount: changedAmount};

    setSpring(copy);
    console.log(spring);
  }

  const handleChangeSeason = (season) => {
    const copy = [...seasons];
    copy[seasons] = season;

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
        list= {
          seasons.filter((season) => season.name)
          } 
        onChange= {(selectedSeason) => 
          handleChangeSeason(selectedSeason)}/>
      
      <Flower 
        list= { 
          // seasons.filter((season) => 
          // season.name === selectedSeason)
          spring
        }
        total= { 
          dimensions.filter((dimension) => 
          dimension.name === clickedDimension)
        } 
        onAmountChange= {(changedAmount) => 
          handleChangeAmount(changedAmount)
        }
        onColorChange= {
          (value) => changeColor(value)
        }
      />

      {/* color picker om de vier verschillende kleuren te bepalen van het boeket, op basis van de gekozen kleuren, veranderen de kleuren onderaan */}
      {/* < Color 
        value={colors} 
        onValueChange={(value) => changeColor(value)}
      /> */ }
       
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
