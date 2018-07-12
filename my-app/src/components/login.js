import React, { Component } from 'react';
import './components.css';
import {
  Route,
  Redirect
} from 'react-router'

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password:'', isLoggedIn:false};
    //
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop,event) {
    this.setState({[prop]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === "password" && this.state.username === "username"){
      this.setState({isLoggedIn: true});
      console.log("WELCOME!");
      console.log(this.state);
      

    } else{
      console.log("FAIL!");
      console.log(this.state);
  }

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
}
export default LogIn;
