import { useRef, useState } from "react";
// using Refs(useRef hook) for value managemnet.......................................
export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// Using states for managing change in input..........................................
// import { useState } from "react";

// export default function Player() {

//   const [enteredName, setEnteredName] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event) {
//     setSubmitted(false);
//     setEnteredName(event.target.value)
//   }

//   function handleClick(){
//     setSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredName : 'unknown entity'} </h2>
//       <p>
//         <input onChange={handleChange} value={enteredName} type="text"/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
