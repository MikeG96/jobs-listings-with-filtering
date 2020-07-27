import React from 'react';
import './JobOffer.scss';

const JobOffer = () => {
  return (
    <section className='job-offer-container'>
      <div className='enterprise-logo'>
        <img
          src='https://i.picsum.photos/id/1058/200/300.jpg?hmac=KdLDQtUUGPBshA5WQaD3nZMUtdgHS9zJJ3pfoXWdjUE'
          alt=''
        />
      </div>
      <div className='enterprise-description'>
        <div className='enterprise-highlight'>
          <h2>Eyecam Co.</h2>
        </div>
        <h1 className='job-position'>Full Stack Eginner</h1>
        <div className='job-offer-details'>
          <ul>
            <li>2w ago</li>
            <li>Full time</li>
            <li>Worldwide</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JobOffer;
