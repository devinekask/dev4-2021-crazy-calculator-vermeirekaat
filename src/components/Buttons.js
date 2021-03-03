const Buttons = ({ sizes, onClick }) => {

    const handleClickButton = e => {
        const clicked = e.target.value;
        onClick(clicked);
    }
    return (
        <div className="button__wrapper">
            {sizes.map((size) => (
                <input onClick={(e) => handleClickButton(e)} className="button" type="button" value={size.name}></input>
            ))}
        </div>

    );
};

export default Buttons;