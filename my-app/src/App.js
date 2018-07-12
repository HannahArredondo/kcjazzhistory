import React, { Component } from 'react';
import * as firebase from 'firebase';
import { base } from './firebase';
import logo from './kcjazz_redlogo2x.png';
import './styles/main.css';
import './index.js';
import Musicians from './components/musicians';
import Timeline from './components/timeline';
import LogIn from './components/login';
import state from './components/musicians'
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C_3Ffw1DlpU"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <ul className="style-box"> <h3>Kansas City jazz is distinguished by the following musical elements:</h3>
        <li> A preference for a 4 feel (walking) over the 2 beat feel found in other jazz
        styles of the time. As a result, Kansas city jazz had a more relaxed, fluid sound
        than other jazz styles.</li>
        <li> Extended soloing. Fueled by the non-stop nightlife under political boss Tom
        Pendergast, Kansas City jam sessions went on well past sunrise, fostering a highly
        competitive atmosphere and a unique jazz culture in which the goal was to "say something"
        with one's instrument, rather than simply show off one's technique. It was not uncommon
        for one "song" to be performed for several hours, with the best musicians often soloing
        for dozens of choruses at a time.</li>
        <li> So-called "head arrangements". The KC big bands often played by memory, composing and
        arranging the music collectively, rather than sight-reading as other big bands of the time
        did. This further contributed to the loose, spontaneous Kansas City sound. </li>
        <li> A heavy blues influence, with KC songs often based around a 12-bar blues structure,
        rather than the 32 bar AABA standard, although Moten Swing is in this AABA format.</li>
        <li> One of the most recognizable characteristics of Kansas City jazz is frequent, elaborate
        riffing by the different sections. Riffs were often created - or even improvised - collectively,
        and took many forms: a) one section riffing alone, serving as the main focus of the music;
        b) one section riffing behind a soloist, adding excitement to the song; or c) two or more
        sections riffing in counterpoint, creating an exciting hard-swinging sound. The Count Basie
        signature tunes "One O'Clock Jump" and "Jumpin' at the Woodside", for example, are simply
        collections of complex riffs, memorized in a head arrangement, and punctuated with solos. Glenn
        Millers famous swing anthem "In the Mood" closely follows the Kansas City pattern of riffing
        sections, and is a good example of the Kansas City style after it had been exported to the rest
        of the world.</li>
      </ul>
      </div>
  </div>
)

const JazzToday = () => (
  <div className = "info">
    <h2> Kansas City Jazz Today </h2>
    <p>Kansas City Jazz has a rich and real history there is no doubt. As important,
    Kansas City Jazz is alive, thriving and still growing. The sheer number of amazingly
    talented musicians in Kansas City is beyond comparison... especially for the size
    of our wonderful city.</p>
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

      <header className="app-header container">
        <div className="header-wrap">
          <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
          <ul className="nav-items">
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/musicians">Musicians</Link></li>
            <li><Link to="/jazztoday">Jazz Today</Link></li>
            <li><Link to="/livejazz">Live Jazz</Link></li>
          </ul>
          <div className="button-wrapper">
            <button type="button"><Link to="/login">Log In</Link></button>
            <button type="button"><Link to="/">Log Out</Link></button>
          </div>
        </div>
      </header>

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
                    <li>Follow the American Jazz Museum here:  &nbsp;</li>
                    <li><a href="https://twitter.com/americanjazzkc">Twitter</a> &nbsp;</li>
                </ul>
              </div>
            </div>
      </footer>

    </div>
  </Router>
)

export default App;
