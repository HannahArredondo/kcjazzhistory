import React from 'react';
import './components.css';
import { Route } from 'react-router-dom';
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
          <li>
            {name.name} ({name.years})
            <img src={name.photo} />
          </li>
        ))}
      </ul>
    )
  }
}

const Musicians = ({ match }) => (
  <div className = "info">
    <h2>Musicians</h2>
    <Musician/>

    <Route path={`${match.path}/:musicianId`} component={Musician}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
export default Musicians;
