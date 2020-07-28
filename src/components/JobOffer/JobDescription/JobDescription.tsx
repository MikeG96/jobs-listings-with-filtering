import React from 'react';

export class JobOfferDetailsProps {
  publishedAt: string;
  schedule: string;
  modality: string;
}

export class JobDescriptionProps {
  enterpriseName: string;
  isNew: boolean;
  isFeatured: boolean;
  jobPosition: string;
  jobOfferDetails: JobOfferDetailsProps;
}

const JobDescription = ({
  enterpriseName,
  isNew,
  isFeatured,
  jobPosition,
  jobOfferDetails,
}: JobDescriptionProps) => {
  return (
    <div className='enterprise-description'>
      <div className='enterprise-highlight'>
        <h2>{enterpriseName}</h2>

        {isNew && <span className='new'>New!</span>}

        {isFeatured && <span className='featured'>Featured</span>}
      </div>
      <h1>{jobPosition}</h1>

      <JobOfferDetails {...jobOfferDetails} />
    </div>
  );
};

const JobOfferDetails = ({
  publishedAt,
  schedule,
  modality,
}: JobOfferDetailsProps) => {
  return (
    <div className='job-offer-details'>
      <ul>
        <li>{publishedAt}</li>
        <li>{schedule}</li>
        <li>{modality}</li>
      </ul>
    </div>
  );
};

export default JobDescription;
