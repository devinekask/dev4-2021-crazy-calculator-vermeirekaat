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

  const seasonsArray = ["spring", "summer", "fall", "winter"];

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
  ]);

  const [summer, setSummer] = useState([
    {
      name: "Lilie", 
      image: Lelie, 
      color: "#FAA3FF", 
      amount: 0
    },
    {
      name: "Fresia", 
      image: Fresia, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Zonnebloem", 
      image: Zonnebloem, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Chrysant", 
      image: Chrysant, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Lavendel", 
      image: Lavendel, 
      color: "#FAA3FF", 
      amount: 2
    },
  ]);

  const [fall, setFall] = useState([
    {
      name: "Dahlia", 
      image: Dahlia, 
      color: "#FAA3FF", 
      amount: 0
    },
    {
      name: "Gerbera", 
      image: Gerbera, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Aster", 
      image: Aster, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Statice", 
      image: Statice, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Chrysant", 
      image: Chrysant, 
      color: "#FAA3FF", 
      amount: 2
    },
  ]);

  const [winter, setWinter] = useState([
    {
      name: "Jasmijn", 
      image: Jasmijn, 
      color: "#FAA3FF", 
      amount: 0
    },
    {
      name: "Camelia", 
      image: Camelia, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Kerstster", 
      image: Kerstster, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Tijgerlelie", 
      image: Tijgerlelie, 
      color: "#FAA3FF", 
      amount: 2
    },
    {
      name: "Cosmea", 
      image: Cosmea, 
      color: "#FAA3FF", 
      amount: 2
    },
  ]);

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

  const [selectedSeason, setSelectedSeason] = useState(spring);

  const changeColor = (color) => {
    console.log(color);
  }

  const handleChangeAmount = (values, season) => {
    const items = values[0];
    const changedAmount = values[1]; 
    const copy = [...spring]; 
    const index = copy.findIndex((check) => check.name === items.name); 
    copy[index] = {...items, amount: changedAmount};

    setSpring(copy);
    console.log(spring);
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
        list= { seasonsArray } 
        onChange= {
          (season) => setSelectedSeason(eval(season)) 
        }
      />
      
      <Flower 
        list= { selectedSeason }
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
          list= { selectedSeason } 
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
