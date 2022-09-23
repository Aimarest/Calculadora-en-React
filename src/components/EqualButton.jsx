

export const EqualButton = ({value, action, isDisable,setIsDisable, setError}) => {


    const handleClick = () =>{
        action(value);
        setIsDisable(true);
        setError('Click clear button to continue')
      }
    
      return (
        <button onClick={handleClick} value={value} disabled={isDisable} className="btn">{value}</button>
      )
}
