import React, { Component } from 'react';
import Table from './components/Table.js'

class App() extends Component {
  constructor(props) {
    this.state = {
      users: []
    }
  }

  render()
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
