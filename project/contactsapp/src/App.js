import React from 'react';
import Profile from './components/Profile';
import Add from './components/Add';
import Contacts from './components/Contacts';
import Remove from './components/Remove';
import './App.css';

class App extends React.Component{
  render(){
  return (
    <body>
      <div class="box">
          <div class="list">
          <Profile />
          <Contacts />
          <Add />
          <Remove />
        </div>
      </div>
    </body>
    );
  }
}

export default App;
