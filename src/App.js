import "./App.css";
import { useState } from "react";
import Season from "./components/Season";
import Flower from "./components/Flower";
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
import Hebe from "./assets/hebe.png";
import Jasmijn from "./assets/jasmijn.png";
import Camelia from "./assets/camelia.png";
import Kerstster from "./assets/kerstster.png";
import Tijgerlelie from "./assets/tijgerlelie.png";
import Cosmea from "./assets/cosmea.png";

const App = () => {

  const seasonsArray = ["spring", "summer", "fall", "winter"];

  const [seasons, setSeasons] = useState({
    spring: [
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
        amount: 0
      },
      {
        name: "Tulp", 
        image: Tulip, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Rose", 
        image: Rose, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Baronia", 
        image: Baronia, 
        color: "#FAA3FF", 
        amount: 0
      },
    ],
    summer: [
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
        amount: 0
      },
      {
        name: "Zonnebloem", 
        image: Zonnebloem, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Chrysant", 
        image: Chrysant, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Lavendel", 
        image: Lavendel, 
        color: "#FAA3FF", 
        amount: 0
      },
    ],
    fall: [
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
        amount: 0
      },
      {
        name: "Aster", 
        image: Aster, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Statice", 
        image: Statice, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Hebe", 
        image: Hebe, 
        color: "#FAA3FF", 
        amount: 0
      },
    ],
    winter: [
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
        amount: 0
      },
      {
        name: "Kerstster", 
        image: Kerstster, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Tijgerlelie", 
        image: Tijgerlelie, 
        color: "#FAA3FF", 
        amount: 0
      },
      {
        name: "Cosmea", 
        image: Cosmea, 
        color: "#FAA3FF", 
        amount: 0
      },
    ]
  });


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

  const [arrayImages, setArrayImages] = useState([]);

  const changeColor = (color) => {
    console.log(color);
  }

  const handleChangeAmount = (values) => {
    const items = values[0];
    const changedAmount = values[1]; 
    const copy = [...seasons[selectedSeason]]; 
    const index = copy.findIndex((check) => check.name === items.name); 
    const itemCopy = {...items, amount: Number(changedAmount)};

    copy[index] = itemCopy;
    const newState = {...seasons, [selectedSeason]: copy};

    setSeasons(newState);

    getArrayImages(items);
  } 

  const getArrayImages = (items) => {
    const amount = items.amount;
    const newArray = []

    for (let i = 0; i < amount; i++) {
      newArray.push(items.image);
    }

    setArrayImages(newArray);
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
          (season) => setSelectedSeason(season)
        }
      />
      
      <Flower 
        list= { 
          seasons[selectedSeason]
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
          list= { arrayImages } 
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
