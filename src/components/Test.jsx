import React, { useState } from 'react';

export default function Example() {

  const [count, setCount] = useState("")

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count.concat(" Ram"))}>
        Click me
      </button>
    </div>
  );
}
