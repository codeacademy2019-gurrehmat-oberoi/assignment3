import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import AuthorGroup from '../../components/AuthorGroup/AuthorGroup.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AuthorGroup author="JK Rowling" />
        <AuthorGroup author="Sydney Sheldon" />
      </div>
    );
  }
}

export default App;
