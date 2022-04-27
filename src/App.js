import logo from './logo.jpg';
import React from 'react';
import './App.css';

class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super();
    this.state={
      title:'hello from Bridgelabz'
    }
  }
 //onclick function
 onClick=($event) =>{
   console.log('save button is clicked',$event);
   window.open(this.url,"_blank");
 }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} alt="bridgelabz logo"/>
      </div>
    );
  }
}

export default App;