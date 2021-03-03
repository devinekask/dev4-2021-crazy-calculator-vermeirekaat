import Anemone from "../assets/anemone.png";
import Baronia from "../assets/baronia.png";
import Iris from "../assets/iris.png";
import Rose from "../assets/rose.png";
import Tulip from "../assets/tulip.png";

const Bouquet = () => {

    const handleClickFormat = e => {
        const clicked = e.target.value;
        console.log(clicked);
    }

    return (
        <>
            <input onClick={(e) => handleClickFormat(e)} className="subtitle" type="button" value="Bouquet Small"></input>
            <input onClick={(e) => handleClickFormat(e)} className="subtitle" type="button" value="Bouquet Medium"></input>
            <input onClick={(e) => handleClickFormat(e)} className="subtitle" type="button" value="Bouquet Large"></input>
            <section className="bouquet--small">
             <h3 className="subtitle">Bouquet Small</h3>
                <div className="placeholder placeholder--small">
                    <img className="place__top-left" src={Anemone} alt="anemone" width="50"></img>
                    <img className="place__top-right" src={Baronia} alt="baronia" width="50"></img>
                    <img className="place__middle" src={Iris} alt="iris" width="50"></img>
                    <img className="place__bottom-left" src={Rose} alt="rose" width="50"></img>
                    <img className="place__bottom-right" src={Tulip} alt="tulip" width="50"></img>
                </div>
            </section>
          </>
    );
};

export default Bouquet;