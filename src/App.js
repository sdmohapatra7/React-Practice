import React from 'react';
import Counter from './components/Couner';
import Form from './components/Form';
import './App.css';
import Car from './components/Car';
import Student from './components/Student';

function App() {
  
  return (
    <div className="App">
      <Counter />
      <Form />
      <Car />
      <Student />
    </div>
  );
}

export default App;
