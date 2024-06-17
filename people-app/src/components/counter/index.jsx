import { useState } from 'react';

import style from './style.module.css';

// remaining of the props text to parentText
export function Counter({ init = 10, text: parentText = '' }) {
  const [count, setCount] = useState(init);
  const [color, setColor] = useState('red');
  const [text, setText] = useState('');

  function handleClick(color) {
    return function () {
      setColor(color);
      //when using the previous, it's recommamded to use a function
      setCount((prevCount) => prevCount + 1);
    };
  }

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{count}</h1>
      <p>
        When clicking on the button, the color of the box will change and the
        count will be incremented
      </p>
      <button className={style.button} onClick={handleClick('green')}>
        vert
      </button>
      <button onClick={handleClick('red')} id={style.monId}>
        rouge
      </button>
      <br />
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text}
      <p>Text change in the Header {parentText}</p>
    </div>
  );
}
