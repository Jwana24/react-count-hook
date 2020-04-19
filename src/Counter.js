import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
    //const [count, setCount] = useState(0); // on donne la valeur de la variable "count" à la méthode "useState"
    const [initialCount, setInitialCount] = useState(0);

    function handleCountChange(e){
        setInitialCount(e.target.value);
    }

  return (
    <div>
        <p>Le compteur est  à : </p>
        <input
            style={{width:"30px"}}
            value={initialCount}
            onChange={handleCountChange}
        />
        <button onClick={() => setInitialCount(Number(initialCount) + 1)}>
        +1
        </button>
        <button onClick={() => setInitialCount(Number(initialCount) - 1)}>
        -1
        </button>
    </div>
  );
}

export default Counter;