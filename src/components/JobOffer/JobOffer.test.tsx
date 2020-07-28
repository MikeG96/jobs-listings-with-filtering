import { render } from '@testing-library/react';
import React from 'react';
import JobOffer, { JobOfferProps } from './JobOffer';

const offering: JobOfferProps = {
  id: 1,
  logo: {
    src:
      'https://i.picsum.photos/id/1058/200/300.jpg?hmac=KdLDQtUUGPBshA5WQaD3nZMUtdgHS9zJJ3pfoXWdjUE',
    alt: 'Eyecam CO.',
  },
  jobDescription: {
    enterpriseName: 'Eyecam Co.',
    isNew: true,
    isFeatured: true,
    jobPosition: 'Full Stack Enginner',
    jobOfferDetails: {
      publishedAt: '2w ago',
      schedule: 'Full time',
      modality: 'Face-to-face',
    },
  },
  tags: ['Frontend', 'CSS', 'Backend', 'Sails'],
};

describe('JobOffer component', () => {
  it('should be created', () => {
    const jobOffer = render(<JobOffer {...offering} />);

    expect(jobOffer).toBeTruthy();
  });
});
