import logo from './logo.svg';
import './App.css';

class App extends logo.Component{
  constructor(){
    super();
    this.state={
      title:'hello from Bridgelabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;