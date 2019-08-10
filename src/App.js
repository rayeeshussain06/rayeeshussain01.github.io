import React, {Component} from 'react';
import Component1 from './components/Component1/C1';
import Component2 from './components/Component2/C2';
import './App.css';
const URL_HOME = 'https://catfact.ninja/fact'

class App extends Component { 
  constructor(){
    super(props)
  this.state = {
      value:'',
      button:''
  }
}
btn = (e)=>
{
this.setState ({
  value:e.target.value
})
}
componentDidMount() {
  fetch(URL_HOME, { method: 'GET'})
  .then(response => response.json())
  .then(json => {
      this.setState({button:json})
  })
}

  render(){
  return (
    <div>
      <Component1 btn={this.btn()}
      btn2={this.button()}/>
    </div>
      
    
  );
}
}
 export default App;
