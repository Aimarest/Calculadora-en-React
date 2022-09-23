import { useState } from 'react';

export const ResultComponent = () => {

    const [result, setResult] = useState('');
    const [text, setText] = useState('')
  return (
    <>

        <h2>{text}</h2>
        <p className="result">Result:{result}</p>
    </>
  )
}
