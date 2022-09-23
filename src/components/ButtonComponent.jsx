

export const ButtonComponent = ({value, action, isDisable}) => {

  const handleClick = () =>{
    action(value);
  }

  return (
    <button onClick={handleClick} disabled={isDisable} value={value} className="btn">{value}</button>
  )
}
