import FlowerItem from "./FlowerItem";

const Flower = (props) => {
    return (
        <article>
        <h2>{props.title}</h2>
        <ul>
          {props.list.map((item) => (
            <FlowerItem key={item} item={item} />
          ))}
        </ul>
      </article>
    );
};

export default Flower;