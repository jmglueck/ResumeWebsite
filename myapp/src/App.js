//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Links from './components/Links.js';
import TechnicalSkillsSection from './components/TechnicalSkillsSection.js';
import EducationSection from './components/EducationSection.js';
import * as websiteData from './websiteData.json';

/*function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> *//*
    <div className="App">
      <header className="App-header">
        {websiteData.name}
      </header>
      <Links />
      
    </div>
  );
}

export default App;*/

export default class App extends React.Component{
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          {websiteData.name}
          <Links />
        </header>

        <TechnicalSkillsSection />
        <EducationSection />
      
      </div>
    );
  }
}

