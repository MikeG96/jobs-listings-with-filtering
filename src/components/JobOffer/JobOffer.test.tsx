import { render } from '@testing-library/react';
import React from 'react';
import JobOffer from './JobOffer';

describe('JobOffer component', () => {
  it('should be created', () => {
    const jobOffer = render(<JobOffer />);

    expect(jobOffer).toBeTruthy();
  });
});
