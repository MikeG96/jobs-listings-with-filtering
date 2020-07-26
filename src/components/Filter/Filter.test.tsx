import { render } from '@testing-library/react';
import React from 'react';
import Filter from './Filter';

describe('Filter component', () => {
  it('should be created', () => {
    const filters: string[] = ['CSS', 'Frontend'];

    const filter = render(<Filter filters={filters} />);

    expect(filter).toBeTruthy();
  });
});
