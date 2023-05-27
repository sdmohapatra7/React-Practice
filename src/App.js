import React from 'react';
import Counter from './components/Couner';
import Form from './components/Form';
import './App.css';
import Car from './components/Car';
import Student from './components/Student';
import Inventory from './components/Inventory'

function App() {
  
  return (
    <div className="App">
      <Counter />
      <Form />
      <Car />
      <Student />
      <Inventory />
    </div>
  );
}

export default App;
