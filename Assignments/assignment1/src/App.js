// Create TWO new components: UserInput and UserOutput
// UserInput should hold an input element, UserOutput two paragraphs
// Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// Pass a username (of your choice) to UserOutput via props and display it there
// Add state to the App component (=> the username) and pass the username to the UserOutput component
// Add a method to manipulate the state (=> an event-handler method)
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// Add two-way-binding to your input (in UserInput) to also display the starting username
// Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state = {
    userNames: [
      'ZYT',
      'SYX',
      'Two-Way Binding'
    ]
  }

  switchUser = () => {
    const tempUserNames = [this.state.userNames[1], this.state.userNames[0], this.state.userNames[2]];
    this.setState({userNames: tempUserNames});
  }
  
  twoWayBind = (event) => {
    this.setState({userNames: [this.state.userNames[0], this.state.userNames[1], event.target.value]});
    console.log(this.state.userNames[2]);
  }
  render() {
    return (
      <div>
        <button onClick = {this.switchUser}>Switch User</button>
        <br />
        <UserInput change={this.twoWayBind} userName={this.state.userNames[2]}/>
        <UserOutput userName={this.state.userNames[0]}>UserOutput1</UserOutput>
        <UserOutput userName={this.state.userNames[1]}>UserOutput2</UserOutput>
        <UserOutput userName={this.state.userNames[2]}>This is used to test two way binding</UserOutput>
      </div>
    );
  }
}

export default App;
