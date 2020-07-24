import React from 'react';
import './Filter.scss';

const Filter = ({ filters }: { filters: string[] }) => {
  return (
    <section className='filter'>
      <div className='filter-container'>
        <ul>
          {filters.map((value) => (
            <li>
              <p>{value}</p>
              <button type='button'>
                <span>&#215;</span>
              </button>
            </li>
          ))}
        </ul>
        <button type='button' className="clear">Clear</button>
      </div>
    </section>
  );
};

export default Filter;
