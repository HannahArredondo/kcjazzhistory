import React, { Component } from 'react';
import logo from './kcjazz_redlogo2x.png';
import './App.css';
import Musicians from './components/musicians';
import Timeline from './components/timeline';
import LogIn from './components/login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <div className = "info">
      <h2>Kansas City Jazz History</h2>
      <p>Kansas City jazz is a style of jazz that developed in Kansas City during
        the 1930s and marked the transition from the structured big band style to
        the musical improvisation style of Bebop. The hard-swinging, bluesy transition
        style is bracketed by Count Basie who in 1929 signed with the Bennie Motens
        Kansas City Orchestra and Kansas City native Charlie Parker who was to usher in
        the Bebop style in the 1940s. According to a Kansas City website, "While New
        Orleans was the birthplace of jazz, America's music grew up in Kansas City".
        Kansas City is known as one of the most popular "cradles of jazz". Other cities
        include New Orleans, Chicago, St. Louis, Pittsburgh, Philadelphia, and New
        York City.</p>
      </div>
  </div>
)

const JazzToday = () => (
  <div className = "info">
    <h2>Jazz today blah blah blah</h2>
  </div>
)

const LiveJazz = () => (
  <div className = "info">
    <h3>For info on live jazz and jazz venues near you, check out
      <div><a href="www.kansascityjazzcalendar.org/" target="_blank">Kansas City Jazz Calendar.</a></div>
      There is something going on every night of the week!
    </h3>
  </div>
)

const App = () => (
  <Router>
    <div className="App">

      <ul className="menu row">
        <li><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></li>
        <ul className="nav-items">
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/musicians">Musicians</Link></li>
          <li><Link to="/jazztoday">Jazz Today</Link></li>
          <li><Link to="/livejazz">Live Jazz</Link></li>
        </ul>
        <button type="button"><Link to="/login">Log In</Link></button>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/timeline" component={Timeline}/>
      <Route path="/musicians" component={Musicians}/>
      <Route path="/jazztoday" component={JazzToday}/>
      <Route path="/livejazz" component={LiveJazz}/>
      <Route path="/login" component={LogIn}/>

      <footer className="App-footer">
          <div className="menu-footer">
              <div className="footer-border">
                <ul className="footer-info">
                    <li>Follow the American Jazz Museum at &nbsp;</li>
                    <li><a href="#">Twitter</a> &nbsp;</li>
                    <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
      </footer>

    </div>
  </Router>
)

export default App;
