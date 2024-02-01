import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './State/Store.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={Store}>
      <div className="App">
        <header className="App-header">
          <p>
            {count}
          </p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </header>
      </div>
    </Provider>
  )
}

export default App
