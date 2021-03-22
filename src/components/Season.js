import styles from "./Season.module.css";
import "../style/input.module.css";

const Season = ({ list, onChange }) => {

    const handleSelectSeason = e => {
        const selected = e.target.value;
        onChange(selected);
    }

    return (
        <>
            <h2 className={styles.hidden}>Formulier</h2>
                <label >Selecteer het gepaste seizoen</label>
                    <select onChange={handleSelectSeason}>
                        {list.map((season) => (
                            <option key={season.index} name="season" value={season}>{season}</option>
                        ))}
                    </select>           
        </>
    );
}

export default Season;