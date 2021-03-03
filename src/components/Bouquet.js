import Anemone from "../assets/anemone.png";
import Baronia from "../assets/baronia.png";
import Iris from "../assets/iris.png";
import Rose from "../assets/rose.png";
import Tulip from "../assets/tulip.png";

const Bouquet = ({ item }) => {
    const size = item[0];

    return (
        <section className="bouquet">
        <h3 className="subtitle">Bouquet Small</h3>
           <div className={size.name}>
               <img className="place__top-left" src={Anemone} alt="anemone" width={size.number}></img>
               <img className="place__top-right" src={Baronia} alt="baronia" width={size.number}></img>
               <img className="place__middle" src={Iris} alt="iris" width={size.number}></img>
               <img className="place__bottom-left" src={Rose} alt="rose" width={size.number}></img>
               <img className="place__bottom-right" src={Tulip} alt="tulip" width={size.number}></img>
           </div>
       </section>
    );
};

export default Bouquet;