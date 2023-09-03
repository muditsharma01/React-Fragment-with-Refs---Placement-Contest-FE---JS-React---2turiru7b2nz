import React, { useState, useRef } from "react";


import List from "./List";
import ListItems from "./ListItems"; // Import ListItems component

const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const inputRef = useRef();

  const onButtonClick = () => {
    if (value === '') {
      inputRef.current.focus(); // Focus the input field if it's empty
    } else {
      setList(Array.from({ length: parseInt(value, 10) }, (_, i) => i + 1));
      setValue('');
    }
  };

  return (
    <div id="main">
      <input id="input" onChange={(e) => setValue(e.target.value)} value={value} ref={inputRef} />
      <button id="button" onClick={onButtonClick}>Click</button>
      <ul id="list">
        {list.map((i) => (
          <ListItems key={i} valuex={i} />
        ))}
      </ul>
    </div>
  );
};

export default App;
