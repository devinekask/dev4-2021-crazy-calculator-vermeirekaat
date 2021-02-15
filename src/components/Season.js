const Season = ({ value, onValueChange }) => {
    return (
        <>
         <option value={value} onChange={(e) => onValueChange(e.value)}>{value}</option>
        </>
    );
}

export default Season;