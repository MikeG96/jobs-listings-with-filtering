import Filter from 'components/Filter/Filter';
import JobOffer from 'components/JobOffer/JobOffer';
import React from 'react';
import './App.scss';
import { JobOfferProps } from './components/JobOffer/JobOffer';

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

  const offerings: JobOfferProps[] = [
    {
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
    },
    {
      id: 2,
      logo: {
        src:
          'https://i.picsum.photos/id/1058/200/300.jpg?hmac=KdLDQtUUGPBshA5WQaD3nZMUtdgHS9zJJ3pfoXWdjUE',
        alt: 'Jaque',
      },
      jobDescription: {
        enterpriseName: 'Jaque',
        isNew: false,
        isFeatured: false,
        jobPosition: 'Frontend Developer',
        jobOfferDetails: {
          publishedAt: '2w ago',
          schedule: 'Full time',
          modality: 'Worldwide',
        },
      },
      tags: ['Frontend', 'CSS', 'Javascript'],
    },
  ];

  return (
    <div className='container'>
      {filters && <Filter filters={filters} />}

      {offerings.map((jobOffer) => (
        <JobOffer key={jobOffer.id} {...jobOffer} />
      ))}
    </div>
  );
}

export default App;
