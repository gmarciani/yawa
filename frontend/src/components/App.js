import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.sass';

function App() {

  const [counterName, setCounterName] = useState('');
  const [counterValue, setCounterValue] = useState('');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ counterName: 'MyCounter' })
    };

    fetch('http://localhost:8000/counters', requestOptions)
        .then(res => res.json())
        .then(data => {
          setCounterName(data.counterName)
          setCounterValue(data.counterValue)
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <p> Counter {counterName} has value {counterValue}</p>
        <a className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
