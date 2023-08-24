import React, { Component } from 'react'
import employees from './employees'
import { Table } from './Table';

class App extends Component {
  render() {
    console.log(employees)
    return (
    <div className="lista_empleados">
      <h1>Tabla de Empleados </h1>
      <Table />
    </div>
    );
  }
}

export default App; 
