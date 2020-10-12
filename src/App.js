import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'


function App() {
  const [term, setTerm] = useState('')


  function handleSearch(term){
    setTerm(term)
  }

  return (
    <>
      <Navbar handleSearch={handleSearch}/>
      <List filter={term}/>
    </>
  );
}

export default App;
