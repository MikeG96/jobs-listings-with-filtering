import React from 'react';
import JobDescription, {
  JobDescriptionProps,
} from './JobDescription/JobDescription';
import './JobOffer.scss';
import JobTags from './JobTags/JobTags';
import Logo, { LogoProps } from './Logo/Logo';

export class JobOfferProps {
  id: number;
  logo: LogoProps;
  jobDescription: JobDescriptionProps;
  tags: string[];
}

const JobOffer = ({ logo, jobDescription, tags }: JobOfferProps) => {
  const { isFeatured } = jobDescription;

  return (
    <section className={'job-offer-container ' + (isFeatured && 'is-featured')}>
      <Logo {...logo} />
      <JobDescription {...jobDescription} />
      <JobTags tags={tags} />
    </section>
  );
};

export default JobOffer;
