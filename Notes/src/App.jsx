import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './State/Store.js';
import Header from './Components/Header.jsx';
import Form from './Components/Form.jsx';
import Pinned from './Components/Pinned.jsx';
import Notes from './Components/Notes.jsx';

function App() {
  const [toEditNote, setToEditNote] = useState(null);

  return (
    <Provider store={Store}>
      <div className="w-full min-h-screen bg-bg">
        <div className="max-w-[720px] mx-auto flex flex-col px-4">
          <Header />
          <Form {...{toEditNote, setToEditNote}}/>
          <Pinned {...{ setToEditNote}} />
          <Notes {...{ setToEditNote}} />
        </div>
      </div>
    </Provider>
  )
}

export default App
