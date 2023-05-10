import { useState } from 'react';
import { Themes } from './../../Components';
import './generator.scss';

const Generator = ( { setRequestState } ) => {

  const [fantasyState, setFantasyState] = useState([]);
  const [scifiState, setScifiState] = useState([]);
  const [historicalState, setHistoricalState] = useState([]);

  function Payload(options) {
    this.options = options;
    this.get = async() => {
      const response = await fetch('https://story-prompt-server.fly.dev', {
        method: 'POST',
        body: JSON.stringify(this.options),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        cache: 'no-cache'
    });
    const data = await response.json();
    return data;
    }
  }

  const __handleSubmit = (e) => {
    e.preventDefault();
    const options = [...fantasyState, ...scifiState, ...historicalState];
    const request = new Payload(options);
    setRequestState('awaiting');
    request.get()
      .then(response => {
        sessionStorage.setItem('response', JSON.stringify(response));
        setRequestState('completed')
      })
      .catch(error => {
        sessionStorage.setItem('error', error.message);
        setRequestState('error');
      });
  }

  return (

    <div className = 'generator'>
      <form onSubmit = { __handleSubmit }>
        <Themes
          fantasy = { fantasyState } setFantasyState = { setFantasyState }
          scifiState = { scifiState } setScifiState = { setScifiState }
          historicalState = { historicalState } setHistoricalState = { setHistoricalState }
        />
        <div className='generator__button'>
          <button>Generate Prompt</button>
        </div>
      </form>
    </div>
  )
}

export default Generator;
