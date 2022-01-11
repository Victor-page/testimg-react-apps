import { useState } from 'react';

import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => setChangedText(true);

  return (
    <div>
      <h2>Hello World!</h2>
      <Output>{`${changedText ? 'Changed' : "It's good to see u"}!`}</Output>
      <button onClick={changedTextHandler} style={{ cursor: 'pointer' }}>
        Change Text!
      </button>
    </div>
  );
};

export default Greeting;
