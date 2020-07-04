import React from 'react';
import './App.css';
import { Nav } from './components/Navbar/Nav';
import { InputField } from './components/Searchbar/InputField';

function App(){
  return (
    <div className="App">
      <Nav />
      <InputField />
    </div>
  );
}

export default App;
