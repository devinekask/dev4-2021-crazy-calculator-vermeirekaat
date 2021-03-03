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
import Jasmijn from "../assets/jasmijn.png";
import Camelia from "../assets/camelia.png";
import Kerstster from "../assets/kerstster.png";
import Tijgerlelie from "../assets/tijgerlelie.png";
import Cosmea from "../assets/cosmea.png";

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