import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a simple React.js web application running inside of a Docker 
          container on an AWS server in Ohio, using Jest for testing, Git for 
          version control and Travis for continuous integration-continuous deployment.
        </p>
      </header>
    </div>
  );
}

export default App;