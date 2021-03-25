import styles from "./Buttons.module.css";

const Buttons = ({ sizes, onClick }) => {

    const handleClickButton = e => {
        const clicked = e.target.value;
        onClick(clicked);
    }
    return (
        <div className={styles.buttonWrapper}>
            {sizes.map((size) => (
                <input key={size.name} onClick={(e) => handleClickButton(e)} className={styles.button} type="button" value={size.name}></input>
            ))}
        </div>
        
    );
};

export default Buttons;