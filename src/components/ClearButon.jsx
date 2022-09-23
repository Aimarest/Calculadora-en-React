

export const ClearButon = ({ value, resetResult }) => {

  const handleClick = () => {
    resetResult();
  }
  return (
    <button onClick={handleClick} value={value} className="btnClear btn">{value}</button>
  )
}
