const Season = ({ list, onChange }) => {

    const handleSelectSeason = e => {
        const selected = e.target.value;
        onChange(selected);
    }

    return (
        <>
            <h2 className="hidden">Formulier</h2>
                <label className="label" htmlFor="season">Selecteer het gepaste seizoen</label>
                    <select onChange={handleSelectSeason}>
                        {list.map((season) => (
                            <option key={season.index} name="season" value={season}>{season}</option>
                        ))}
                    </select>           
        </>
    );
}

export default Season;