

export const ButtonComponent = ({value, action, isDisable}) => {

  const handleClick = () =>{
    action(value);
  }

  return (
    <button onClick={handleClick}  disabled={isDisable} name={value} value={value} className="btn">{value}</button>
  )
}
