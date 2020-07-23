import React from 'react';
import './App.scss';
import Filter from './components/Filter/Filter';

function App() {
  const filters = ['Frontend', 'CSS'];

  return (
    <>
      <Filter filters={filters} />
    </>
  );
}

export default App;
