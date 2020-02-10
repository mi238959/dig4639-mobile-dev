import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props) {
  console.log(props);
  return (<p>My name is {props.name}</p>)
}
//parenthesis around jsx to allow proper translation//
class App extends React.Component {
  clickHandler(){
    alert("yeaaaass" + this);
    console.log(this);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={this.clickHandler}>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          I am tired
        </p>
        <NameBadge name="Miranda"/>
        <NameBadge name="Brooks"/>
        <NameBadge name="Jeffrey"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
