import { useState } from 'react';
import { Themes } from './../../Components';
import './generator.scss';

const Generator = () => {

  const [fantasyState, setFantasyState] = useState([]);
  const [scifiState, setScifiState] = useState([]);
  const [historicalState, setHistoricalState] = useState([]);

  function Payload(options) {
    this.options = options;
    this.get = async() => {
      try {
        const response = await fetch('http://localhost:3000/', {
          method: 'POST',
          body: JSON.stringify(this.options),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          cache: 'no-cache'
      });
      const data = await response.json();
      return data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  const __handleSubmit = (e) => {
    e.preventDefault();
    const options = [...fantasyState, ...scifiState, ...historicalState];
    const request = new Payload(options);
    request.get().then(data => {
      console.log('response:', data);
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
