

export const EqualButton = ({value, action, isDisable,setIsDisable}) => {


    const handleClick = () =>{
        action(value);
        setIsDisable(true);
        
      }
    
      return (
        <button onClick={handleClick} value={value} disabled={isDisable} className="btn">{value}</button>
      )
}
