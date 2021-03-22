import React from "react";
import { useState } from "react";

import Season from "../components/Season";
import Flower from "../components/Flower";
import Buttons from "../components/Buttons";
import Bouquet from "../components/Bouquet";

import Anemone from "../assets/anemone.png";
import Baronia from "../assets/baronia.png";
import Iris from "../assets/iris.png";
import Rose from "../assets/rose.png";
import Tulip from "../assets/tulip.png";
import Lelie from "../assets/lelie.png";
import Fresia from "../assets/fresia.png";
import Zonnebloem from "../assets/zonnebloem.png";
import Chrysant from "../assets/chrysant.png";
import Lavendel from "../assets/lavendel.png";
import Dahlia from "../assets/dahlia.png";
import Gerbera from "../assets/gerbera.png";
import Aster from "../assets/aster.png";
import Statice from "../assets/statice.png";
import Hebe from "../assets/hebe.png";
import Jasmijn from "../assets/jasmijn.png";
import Camelia from "../assets/camelia.png";
import Kerstster from "../assets/kerstster.png";
import Tijgerlelie from "../assets/tijgerlelie.png";
import Cosmea from "../assets/cosmea.png";


const Home = () => {
    const seasonsArray = ["lente", "zomer", "herfst", "winter"];

    const [seasons, setSeasons] = useState({
      lente: [
        {
          name: "Anemoon", 
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
          name: "Roos", 
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
      zomer: [
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
      herfst: [
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
        name: "klein", 
        number: 50, 
        max: 9,
      },
      {
        name: "gemiddeld", 
        number: 75,
        max: 16,
      },
      {
        name: "groot",
        number: 100,
        max: 25,
      }
    ]);
  
    const [clickedDimension, setClickedDimension] = useState("klein");
  
    const [selectedSeason, setSelectedSeason] = useState("lente");
  
    const [arrayImages, setArrayImages] = useState([]);
  
    const handleChangeSeason = (season) => {
      setSelectedSeason(season);
      
      setSeasons({...seasons, ...seasons[season]});
      getArrayImages(seasons[season]);
    }
  
    const handleChangeColor = async (values) => {
      const items = values[0];
      const changedColor = values[1];
      const copy = [...seasons[selectedSeason]];
      const index = copy.findIndex((check) => check.name === items.name);
      const itemCopy = {...items, color: changedColor};
  
      copy[index] = itemCopy;
      const newState = {...seasons, [selectedSeason]: copy};
  
      getArrayImages(items);
      setSeasons(newState);
    }
  
    const handleChangeAmount = (values) => {
      const items = values[0];
      const changedAmount = values[1]; 
      const copy = [...seasons[selectedSeason]]; 
      const index = copy.findIndex((check) => check.name === items.name); 
      const itemCopy = {...items, amount: Number(changedAmount)};
  
      copy[index] = itemCopy;
      const newState = {...seasons, [selectedSeason]: copy};
  
      getArrayImages(items);
      setSeasons(newState);
    } 
  
    const getArrayImages = (items) => {
      const amount = items.amount;
      const newArray = []
  
      // const copy = [...arrayImages];
      // copy[arrayImages] = amount;
  
  
      /* for (let i = 0; i < amount; i++) {
        const newItem = {name: items.name, image: items.image, color: items.color};
        copy[arrayImages] = newItem;
      }*/ 
  
      for (let i = 0; i < amount; i++) {
        newArray.push({name: items.name, image: items.image, color: items.color})
      }
      setArrayImages(newArray);
      // console.log(arrayImages);
    }
  
    const handleClickButton = (button) => {
      const copy = [...dimensions];
      copy[dimensions] = button;
  
      setDimensions(copy);
      
      setClickedDimension(button);
    }

    return (
        <section className="content">
        <article className="form">
        <Season 
          list= { seasonsArray } 
          onChange= {
            (season) => handleChangeSeason(season)
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
            (value) => handleChangeColor(value)
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
            color= { seasons[selectedSeason] }
          />
        </article> 
      </section>
    )
};

export default Home;