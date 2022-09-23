

export const ButtonComponent = ({value, addValueToResult}) => {

  const handleClick = () =>{
   addValueToResult(value);
  }

  return (
    <button onClick={handleClick} value={value} className="btn">{value}</button>
  )
}
