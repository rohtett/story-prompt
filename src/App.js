import { useState } from 'react';
import { Generator, Modal } from './Containers';
import './App.css';
//process.env.REACT_APP_SECRET_KEY

const App = () => {

  const [requestState, setRequestState] = useState();
  return (
    <div className='App'>
      <h1>test</h1>
      <Modal requestState = { requestState } setRequestState = { setRequestState } />
      <Generator setRequestState = { setRequestState } />
    </div>
  );
}

export default App;
