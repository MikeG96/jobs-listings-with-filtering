import React from 'react';
import './App.scss';
import Filter from './components/Filter/Filter';

function App() {
  const filters = ['Frontend', 'CSS'];

  return (
    <div className='container'>
      <Filter filters={filters} />
    </div>
  );
}

export default App;
