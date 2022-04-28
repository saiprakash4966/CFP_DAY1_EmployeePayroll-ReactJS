import logo from './assets/BL-logo.jpg';
import React from 'react';
import './App.css';

class App extends React.Component {
  url="https://www.bridgelabz.com/"
  constructor() {
    super() 
    this.state = {
      //title: 'Hello from Bridgelabz',
      userName: '',
      nameError: ''
    }
  }

  /**
   * onClick method is called when image is clicked
   */
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

  /**
   * onChange event listener is used to invoke this func
   * @param {*} event 
   */
  onNameChange = (event) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value})
    if(nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else {
      this.setState({nameError: 'Invalid NAME'})
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img src={logo} onClick={this.onClick} 
            alt="BridgeLabz Logo goes here"/>
        </div>
        <div>
          <input onChange={this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
        </div>
      </>
    )
  }
} 
export default App;