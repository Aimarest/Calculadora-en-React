

export const ButtonComponent = ({value}) => {

  const handleClick = (ev) =>{
    console.log('hello soy un boton', ev.target.value)
  }

  return (
    <button onClick={handleClick} value={value} className="btn">{value}</button>
  )
}
