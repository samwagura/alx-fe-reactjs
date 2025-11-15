import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px 0',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      width: 'fit-content',
      alignSelf: 'center'
    }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
        Current Count: {count}
      </p>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: '0 5px', padding: '8px 12px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ margin: '0 5px', padding: '8px 12px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ margin: '0 5px', padding: '8px 12px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
