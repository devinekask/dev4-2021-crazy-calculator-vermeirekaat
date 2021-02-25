const Color = ({value, onValueChange}) => {

    // console.log(value); 

    return (
        <>
         <label className="label">Color {value}
          <input onChange={(e) => onValueChange(e.target.value)} type="color" defaultValue={value}></input>
        </label>
        </>
    );
}

export default Color;