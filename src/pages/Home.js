import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";

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
          color: "#FFC0CB", 
          amount: 0
        },
        {
          name: "Iris", 
          image: Iris, 
          color: "#ff748c", 
          amount: 0
        },
        {
          name: "Tulp", 
          image: Tulip, 
          color: "#ffdae0", 
          amount: 0
        },
        {
          name: "Roos", 
          image: Rose, 
          color: "#c0fff4", 
          amount: 0
        },
        {
          name: "Baronia", 
          image: Baronia, 
          color: "#ffd5c0", 
          amount: 0
        },
      ],
      zomer: [
        {
          name: "Lilie", 
          image: Lelie, 
          color: "#FFC0CB", 
          amount: 0
        },
        {
          name: "Fresia", 
          image: Fresia, 
          color: "#ff748c", 
          amount: 0
        },
        {
          name: "Zonnebloem", 
          image: Zonnebloem, 
          color: "ffdae0", 
          amount: 0
        },
        {
          name: "Chrysant", 
          image: Chrysant, 
          color: "#c0fff4", 
          amount: 0
        },
        {
          name: "Lavendel", 
          image: Lavendel, 
          color: "#ffd5c0", 
          amount: 0
        },
      ],
      herfst: [
        {
          name: "Dahlia", 
          image: Dahlia, 
          color: "#FFC0CB", 
          amount: 0
        },
        {
          name: "Gerbera", 
          image: Gerbera, 
          color: "#ff748c", 
          amount: 0
        },
        {
          name: "Aster", 
          image: Aster, 
          color: "ffdae0", 
          amount: 0
        },
        {
          name: "Statice", 
          image: Statice, 
          color: "#c0fff4", 
          amount: 0
        },
        {
          name: "Hebe", 
          image: Hebe, 
          color: "#ffd5c0", 
          amount: 0
        },
      ],
      winter: [
        {
          name: "Jasmijn", 
          image: Jasmijn, 
          color: "#FFC0CB", 
          amount: 0
        },
        {
          name: "Camelia", 
          image: Camelia, 
          color: "#ff748c", 
          amount: 0
        },
        {
          name: "Kerstster", 
          image: Kerstster, 
          color: "ffdae0", 
          amount: 0
        },
        {
          name: "Tijgerlelie", 
          image: Tijgerlelie, 
          color: "#c0fff4", 
          amount: 0
        },
        {
          name: "Cosmea", 
          image: Cosmea, 
          color: "#ffd5c0", 
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

    const [bouquetList, setBouquetList] = useState([]);

    const handleSaveButton = (bouquet) => {
      const copy = [...bouquetList];
      copy.push(bouquet);

      setBouquetList(copy);
    }
  
    const handleChangeSeason = (season) => {
      setSelectedSeason(season);
      
      setSeasons({...seasons}); 
      // console.log(initialState);
      arrayImages.splice(0, arrayImages.length);
    }
  
    const handleChangeColor = (values) => {
      const items = values[0];
      const changedColor = values[1]; 
      const copy = [...seasons[selectedSeason]];
      const index = copy.findIndex((check) => check.name === items.name);
      const itemCopy = {...items, color: changedColor};
  
      copy[index] = itemCopy;
      const newState = {...seasons, [selectedSeason]: copy};
  
      // getArrayImages(values);
      setSeasons(newState);
      // console.log(seasons);

      const copyArray = [...arrayImages]; 
      const indexArray = copyArray.filter((check) => check.name === items.name);
      const itemCopyArray = {...items, color: changedColor};
      copyArray[indexArray] = itemCopyArray;
      
      setArrayImages(copyArray);
    }
  
    const handleChangeAmount = (values) => {
      const items = values[0];
      const changedAmount = values[1]; 
      const totalAmount = values[2] + 1;

      const button = dimensions.filter((dimension) => dimension.name === clickedDimension)
      const maxAmount = button[0].max;

      const copy = [...seasons[selectedSeason]]; 
      const index = copy.findIndex((check) => check.name === items.name); 
      const itemCopy = {...items, amount: Number(changedAmount)};

      const test = seasons[selectedSeason];
      const previousAmount = test[index].amount;

      copy[index] = itemCopy;
      const newState = {...seasons, [selectedSeason]: copy};

      if (previousAmount > changedAmount) {
        const name = copy[index].name;
        const array = [...arrayImages];
        const searchName = array.findIndex((check) => check.name === name);
        arrayImages.splice(searchName, 1);
      }
      if (totalAmount > maxAmount && previousAmount < changedAmount) {
        return null;
      }
      if (totalAmount <= maxAmount && previousAmount < changedAmount) {
        getArrayImages(items);
      } 
     
      setSeasons(newState);
    } 
  
    const getArrayImages = (items) => {
      const copy = [...arrayImages];
      copy.push({name: items.name, image: items.image, color: items.color});

      setArrayImages(copy);     
    }
  
    const handleClickButton = (button) => {
      const copy = [...dimensions];
      copy[dimensions] = button;
  
      setDimensions(copy);
      
      setClickedDimension(button);
    }

    return (
      <section className={styles.content}>
        <article className={styles.form}>
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
        
        <article className={styles.bouquet}>
  
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
            onSave= {
              (newBouquet) => handleSaveButton(newBouquet)
            }
          />
        </article> 
    </section>
    )
};

export default Home;