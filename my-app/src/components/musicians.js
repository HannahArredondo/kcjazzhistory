import React, { Component } from 'react';
import * as firebase from 'firebase';
import './components.css';
import {db} from '../firebase.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const musicianDBRef = db.ref().child('data')

const Musician = ({ match }) => (
  <div>
    <h3>{match.params.musicianId}</h3>
  </div>
)

const Musicians = ({ match }) => (
  <div className = "info">
    <h2>Musicians</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:musicianId`} component={Musician}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
export default Musicians;
