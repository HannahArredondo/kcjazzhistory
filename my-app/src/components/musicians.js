import React from 'react';
import './components.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');

var thisDB = firebase.initializeApp({
  apiKey: "AIzaSyBP_nf952wR8ZICsOvxRctjEuElRJS0dGo",
  authDomain: "kc-jazz.firebaseapp.com",
  databaseURL: "https://kc-jazz.firebaseio.com",
  projectId: "kc-jazz",
  storageBucket:"kc-jazz.appspot.com"
});

var db = firebase.database(thisDB);
var base = Rebase.createClass(db);

class Musician extends React.Component {
  constructor(props) {
    super(props)
    this.addMusician = this.addMusician.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);

    this.state = {
      musicians: []
    }
  }

  addMusician(date) {
    const musicians = {...this.state.musicians};
    const id = Date.now();
    musicians[id] = {
      id: id,
      years: date,
      musician: ""
    };
    this.setState({ musicians });
  }

  componentWillMount() {
    this.musiciansRef = base.syncState("musicians", {
      context: this,
      state: 'musicians'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.musiciansRef);
  }

  render() {
    console.log(this.state);

    return (
      <ul>
        {this.state.musicians.map((name) => (
          <Link to="/">
            <li>
              <div className="music-box">
                <h3> {name.name} </h3>
                <p> ({name.years})</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  }
}

const Musicians = ({ match }) => (
  <div className = "info">
    <p>These KC Jazz Musicians have impacted the history of Jazz in the area.</p>
    <div className="musician-box">
      <Musician/>
    </div>
    <Route path={`${match.path}/:musicianId`} component={Musician}/>
    <Route exact path={match.path} render={() => (
      <p>Please select a musician you wish to learn more about.</p>
    )}/>
  </div>
)
export default Musicians;
