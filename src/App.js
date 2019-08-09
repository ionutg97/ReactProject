import React, { Component } from "react";
import Header from './components/Header';
import Content from './components/Content';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header
          title="Header title from props..."
          subtitle="Header subtitle from props..."
        />
        <Content
          counter={10}
        />
      </div>
    );
  }
}

export default App;
