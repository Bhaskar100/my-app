import React, { Component } from 'react';
import './App.css';

import Studentlist from './components/Studentlist';

class App extends Component{

  render(){
    return(
    <div className ="App">
      <Studentlist/>
    </div>
    );
  }
}

export default App;
