import React, { Component } from 'react';
import './App.css';
import PeopleCard from './Components/PeopleCard';
import { Container, Row, Col } from 'reactstrap';
import Menu from './Components/Menu';
import CardLayout from './Components/CardLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <CardLayout />
      
        
      </div>
    );
  }
}

export default App;