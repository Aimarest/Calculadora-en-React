

export const ButtonComponent = ({value, action}) => {

  const handleClick = () =>{
    action(value);
  }

  return (
    <button onClick={handleClick} value={value} className="btn">{value}</button>
  )
}
