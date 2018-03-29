import React, { Component } from 'react';
import logo from './kcjazz_redlogo2x.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-menu">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="menu-border">
              <ul>
                  <li><a href="#">The Story</a></li>
                  <li><a href="#">Maps</a></li>
                  <li><a href="#">Musicians</a></li>
                  <li><a href="#">Jazz Today</a></li>
                  <li><a href="#">Live Music</a></li>
              </ul>
            </div>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer className="App-footer">
          <div className="menu-footer">
              <div className="footer-border">
                <ul className="footer-info">
                    <li>More info at: </li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
