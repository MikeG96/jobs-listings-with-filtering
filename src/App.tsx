import Filter from 'components/Filter/Filter';
import JobOffer from 'components/JobOffer/JobOffer';
import React from 'react';
import './App.scss';

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
