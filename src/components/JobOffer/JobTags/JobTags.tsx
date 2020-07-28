import React from 'react';

const JobTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className='job-offer-tags'>
      {tags.map((value, index) => (
        <button type='button' key={index}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default JobTags;
