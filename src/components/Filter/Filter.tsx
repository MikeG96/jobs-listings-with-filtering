import React from 'react';
import './Filter.scss';

const Filter = ({ filters }: { filters: string[] }) => {
  return (
    <section className='filter'>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <span>{value}</span>
            <button type='button'>&#10005;</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filter;
