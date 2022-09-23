import { useState } from 'react';

export const ResultComponent = () => {

    const [result, setResult] = useState('');

  return (
    <>
        <h2 className="result">{result}</h2>
    </>
  )
}
