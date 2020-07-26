import { render } from '@testing-library/react';
import React from 'react';
import Filter from './Filter';

describe('Filter component', () => {
  it('Should be show filter component', () => {
    const filters: string[] = ['CSS', 'Frontend'];

    const filter = render(<Filter filters={filters} />);

    expect(filter).toBeTruthy();
  });

  it('Should be empty filter component', () => {
    const filters: string[] = [];

    const filter = render(<Filter filters={filters} />);

    expect(filter.container.innerHTML).toBe('');
  });
});
