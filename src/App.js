import React from 'react';
import Counter from './components/Couner';
import Form from './components/Form';
import './App.css';
import Car from './components/Car';
import Student from './components/Student';
import Inventory from './components/Inventory';
import Score from './components/Score';

function App() {
  
  return (
    <div className="App">
      <Counter />
      <Form />
      <Car />
      <Student />
      <Inventory />
      <Score />
    </div>
  );
}

export default App;
