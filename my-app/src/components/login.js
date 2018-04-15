import React, { Component } from 'react';
import './components.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password:''};
    //
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop,event) {
    this.setState({[prop]: event.target.value});
  }

  handleSubmit(event) {
    console.log(event,this.state);
    event.preventDefault();
    if (this.state.password =="password" && this.state.username=="username"){
      console.log("Welcome {this.state.username}")
    } else{ console.log("FAIL!");}
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Username:<input type="text" value={this.state.username} onChange={this.handleChange.bind(this,'username')} /><br/>
        Password: <input type="password" value={this.state.password} onChange={this.handleChange.bind(this,'password')}/><br/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}



// function checkUser(props) {
//   if (props.password =="password" && props.user=="username"){
//     console.log("Success!")
//   }
// }
}
export default LogIn;
