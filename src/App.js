import './App.css';
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Flat from './components/Flat';

function App() {

  const flat = [
    {
      id: 0,
      name_flat : 'Ochota',
      area: '50m2',
      price: '520 000 zł',
      numer: 3
    },

    {
      id: 1,
      name_flat : 'Wilanów',
      area: '30m2',
      price: '459 000 zł',
      numer: 1
    },
  ]

  return (
    <div >
      < Header />
      <Search />
      <Flat />
      
    </div>
  );
}

export default App;
