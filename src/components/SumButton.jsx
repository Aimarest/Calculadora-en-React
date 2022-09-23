

export const SumButton = ({value,  sum }) => {

    const handleSum = () =>{
        sum(value)
    }
  return (
   <button onClick={handleSum} value={value} className="sumBtn">{value}

   </button>
  )
}
