import React from 'react';
import './Filter.scss';

export class FilterProps {
  filters: string[];
}

const Filter = ({ filters }: FilterProps) => {
  return (
    <section className='filter'>
      <div className='filter-container'>
        <ul>
          {filters.map((value, index) => (
            <li key={index}>
              <p>{value}</p>
              <button type='button'>
                <span>&#215;</span>
              </button>
            </li>
          ))}
        </ul>
        <button type='button' className='clear'>
          Clear
        </button>
      </div>
    </section>
  );
};

export default Filter;
