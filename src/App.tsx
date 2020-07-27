import JobOffer from 'components/JobOffer/JobOffer';
import React from 'react';
import './App.scss';
import Filter from './components/Filter/Filter';

function App() {
  const filters: string[] = [
    'Frontend',
    'CSS',
    'JavaScript',
    'Frontend',
    'JavaScript',
    'Frontend',
    'JavaScript',
    'Frontend',
    'JavaScript',
    'Frontend',
    'JavaScript',
  ];

  return (
    <div className='container'>
      {filters && <Filter filters={filters} />}
      <JobOffer />
    </div>
  );
}

export default App;
