import styles from "./Season.module.css";
import "../style/input.module.css";

const Season = ({ list, onChange }) => {

    const handleSelectSeason = e => {
        const selected = e.target.value;
        onChange(selected);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.hidden}>Formulier</h2>
                <div className={styles.selection}>
                <select onChange={handleSelectSeason}>
                        {list.map((season) => (
                            <option key={season} name="season" value={season}>{season}</option>
                        ))}
                    </select>        
                </div>
                       
        </div>
    );
}

export default Season;