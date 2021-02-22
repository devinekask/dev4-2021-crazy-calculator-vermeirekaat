const Season = ({ list, onSelect }) => {

    return (
        <>
            <h2 className="hidden">Flower Form</h2>
                <label className="label" htmlFor="season">Choose a season</label>
                    <select onChange={(e) => onSelect(e.target.value)}>
                        {list.map((season) => (
                            <option key={season.index} name="season" value={season.name}>{season.name}</option>
                        ))}
                    </select>
        </>
    );
}

export default Season;