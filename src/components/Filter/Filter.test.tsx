import { render } from '@testing-library/react';
import React from 'react';
import Filter, { FilterProps } from './Filter';

describe('Filter component', () => {
  it('should be created', () => {
    const props: FilterProps = {
      filters: ['CSS', 'Frontend'] 
    }

    const { filters} = props;

    const filter = render(<Filter filters={filters} />);

    expect(filter).toBeTruthy();
  });
});
